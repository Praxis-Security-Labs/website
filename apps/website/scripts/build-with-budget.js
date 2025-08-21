#!/usr/bin/env node

/**
 * Build script with performance budget enforcement
 * Analyzes bundle size and enforces performance budgets
 */

import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  generateBudgetReport,
  formatBytes,
} from '../performance-budget.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

/**
 * Log colored output
 */
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Get directory size recursively
 */
async function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        const { size: dirSize, files: dirFiles } =
          await getDirectorySize(fullPath);
        totalSize += dirSize;
        files.push(...dirFiles);
      } else {
        const stats = await fs.stat(fullPath);
        totalSize += stats.size;
        files.push({
          name: path.relative(rootDir, fullPath),
          size: stats.size,
          path: fullPath,
        });
      }
    }
  } catch (error) {
    log(
      `Warning: Could not read directory ${dirPath}: ${error.message}`,
      colors.yellow
    );
  }

  return { size: totalSize, files };
}

/**
 * Analyze build output
 */
async function analyzeBuildOutput() {
  const distPath = path.join(rootDir, 'dist');

  try {
    const { size, files } = await getDirectorySize(distPath);

    // Group files by type
    const assets = files.map(file => ({
      name: file.name,
      size: file.size,
      type: path.extname(file.name).substring(1) || 'other',
    }));

    // Sort by size (largest first)
    assets.sort((a, b) => b.size - a.size);

    return {
      totalSize: size,
      assets,
      chunks: assets.filter(asset => asset.type === 'js'),
      stylesheets: assets.filter(asset => asset.type === 'css'),
      images: assets.filter(asset =>
        ['jpg', 'jpeg', 'png', 'webp', 'svg'].includes(asset.type)
      ),
      other: assets.filter(
        asset =>
          !['js', 'css', 'jpg', 'jpeg', 'png', 'webp', 'svg'].includes(
            asset.type
          )
      ),
    };
  } catch (error) {
    throw new Error(`Failed to analyze build output: ${error.message}`);
  }
}

/**
 * Print performance budget report
 */
function printBudgetReport(report) {
  log('\n🔍 Performance Budget Analysis', colors.bold + colors.blue);
  log('=====================================');

  // Summary
  log(`📊 Bundle Summary:`, colors.bold);
  log(`   Total Size: ${report.summary.totalSize}`);
  log(`   Asset Count: ${report.summary.assetCount}`);
  log(`   Budget Utilization: ${report.summary.budgetUtilization}%`);

  // Budget limits
  log(`\n📏 Budget Limits:`, colors.bold);
  log(`   Total Limit: ${report.budget.totalLimit}`);
  log(`   Initial Bundle Limit: ${report.budget.initialBundleLimit}`);
  log(`   Route Chunk Limit: ${report.budget.routeChunkLimit}`);

  // Errors
  if (report.issues.errors.length > 0) {
    log(
      `\n❌ Budget Violations (${report.issues.errors.length}):`,
      colors.bold + colors.red
    );
    report.issues.errors.forEach(error => {
      log(`   • ${error}`, colors.red);
    });
  }

  // Warnings
  if (report.issues.warnings.length > 0) {
    log(
      `\n⚠️  Warnings (${report.issues.warnings.length}):`,
      colors.bold + colors.yellow
    );
    report.issues.warnings.forEach(warning => {
      log(`   • ${warning}`, colors.yellow);
    });
  }

  // Recommendations
  if (report.recommendations.length > 0) {
    log(`\n💡 Optimization Recommendations:`, colors.bold + colors.blue);
    report.recommendations.forEach(rec => {
      log(`   • ${rec}`, colors.blue);
    });
  }

  // Status
  if (report.passed) {
    log(`\n✅ Performance Budget: PASSED`, colors.bold + colors.green);
  } else {
    log(`\n❌ Performance Budget: FAILED`, colors.bold + colors.red);
  }

  log('');
}

/**
 * Print largest assets
 */
function printLargestAssets(buildStats) {
  log('📦 Largest Assets (Top 10):', colors.bold);

  const topAssets = buildStats.assets.slice(0, 10);
  topAssets.forEach((asset, index) => {
    const size = formatBytes(asset.size);
    const percentage = Math.round((asset.size / buildStats.totalSize) * 100);
    log(`   ${index + 1}. ${asset.name} - ${size} (${percentage}%)`);
  });
  log('');
}

/**
 * Save budget report to file
 */
async function saveBudgetReport(report) {
  const reportPath = path.join(rootDir, 'performance-budget-report.json');

  try {
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    log(
      `📄 Budget report saved to: ${path.relative(rootDir, reportPath)}`,
      colors.blue
    );
  } catch (error) {
    log(
      `Warning: Could not save budget report: ${error.message}`,
      colors.yellow
    );
  }
}

/**
 * Main build function
 */
async function main() {
  try {
    log(
      '🏗️  Building with Performance Budget Enforcement',
      colors.bold + colors.blue
    );
    log('================================================\n');

    // Step 1: Run the build
    log('1. Running Astro build...', colors.bold);
    try {
      execSync('npm run astro build', {
        cwd: rootDir,
        stdio: 'inherit',
      });
      log('✅ Build completed successfully\n', colors.green);
    } catch (error) {
      log('❌ Build failed', colors.red);
      process.exit(1);
    }

    // Step 2: Analyze build output
    log('2. Analyzing build output...', colors.bold);
    const buildStats = await analyzeBuildOutput();
    log(
      `✅ Found ${buildStats.assets.length} assets (${formatBytes(buildStats.totalSize)} total)\n`,
      colors.green
    );

    // Step 3: Generate budget report
    log('3. Checking performance budget...', colors.bold);
    const report = generateBudgetReport(buildStats);

    // Step 4: Print results
    printBudgetReport(report);
    printLargestAssets(buildStats);

    // Step 5: Save report
    await saveBudgetReport(report);

    // Step 6: Exit based on results
    if (!report.passed) {
      log('Build failed due to performance budget violations.', colors.red);
      log('Please optimize your bundle size and try again.', colors.red);
      process.exit(1);
    }

    log(
      '🎉 Build completed successfully with performance budget compliance!',
      colors.bold + colors.green
    );
  } catch (error) {
    log(`❌ Build script error: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Handle uncaught errors
process.on('uncaughtException', error => {
  log(`❌ Uncaught exception: ${error.message}`, colors.red);
  process.exit(1);
});

process.on('unhandledRejection', error => {
  log(`❌ Unhandled rejection: ${error.message}`, colors.red);
  process.exit(1);
});

// Run the build
main();
