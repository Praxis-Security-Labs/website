/**
 * Performance Budget Configuration
 * Defines size limits and performance thresholds for the build process
 */

// Performance budget thresholds (in bytes)
export const PERFORMANCE_BUDGET = {
  // Bundle size limits
  INITIAL_BUNDLE_SIZE: 500 * 1024, // 500KB for initial bundle
  ROUTE_CHUNK_SIZE: 200 * 1024,    // 200KB per route chunk
  ASSET_SIZE_LIMIT: 100 * 1024,    // 100KB for individual assets
  TOTAL_BUNDLE_SIZE: 1000 * 1024,  // 1MB total bundle size
  
  // Image optimization limits
  MAX_IMAGE_SIZE: 500 * 1024,      // 500KB for individual images
  TOTAL_IMAGES_SIZE: 2000 * 1024,  // 2MB for all images
  
  // CSS limits
  MAX_CSS_SIZE: 100 * 1024,        // 100KB for CSS bundles
  
  // JavaScript limits
  MAX_JS_SIZE: 300 * 1024,         // 300KB for individual JS chunks
  
  // Critical resource limits
  CRITICAL_REQUEST_COUNT: 10,       // Maximum critical requests
  
  // Performance timing thresholds (in milliseconds)
  LIGHTHOUSE_PERFORMANCE_SCORE: 90,
  LIGHTHOUSE_ACCESSIBILITY_SCORE: 90,
  LIGHTHOUSE_SEO_SCORE: 90,
  
  // Core Web Vitals targets
  LCP_THRESHOLD: 2500,             // Largest Contentful Paint < 2.5s
  FID_THRESHOLD: 100,              // First Input Delay < 100ms
  CLS_THRESHOLD: 0.1,              // Cumulative Layout Shift < 0.1
};

// File type configurations
export const FILE_TYPE_BUDGETS = {
  // JavaScript files
  javascript: {
    maxSize: PERFORMANCE_BUDGET.MAX_JS_SIZE,
    warning: PERFORMANCE_BUDGET.MAX_JS_SIZE * 0.8, // Warning at 80%
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx']
  },
  
  // CSS files
  css: {
    maxSize: PERFORMANCE_BUDGET.MAX_CSS_SIZE,
    warning: PERFORMANCE_BUDGET.MAX_CSS_SIZE * 0.8,
    extensions: ['.css', '.scss', '.sass', '.less']
  },
  
  // Image files
  images: {
    maxSize: PERFORMANCE_BUDGET.MAX_IMAGE_SIZE,
    warning: PERFORMANCE_BUDGET.MAX_IMAGE_SIZE * 0.8,
    extensions: ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico']
  },
  
  // Font files
  fonts: {
    maxSize: 100 * 1024, // 100KB per font
    warning: 80 * 1024,
    extensions: ['.woff', '.woff2', '.ttf', '.eot', '.otf']
  }
};

// Route-specific budgets
export const ROUTE_BUDGETS = {
  // Homepage - critical for first impression
  '/': {
    initialBundle: 400 * 1024,    // 400KB initial
    totalSize: 600 * 1024,        // 600KB total
    criticalResources: 8
  },
  
  // Product pages - marketing critical
  '/product': {
    initialBundle: 450 * 1024,
    totalSize: 700 * 1024,
    criticalResources: 10
  },
  
  // Contact/Demo pages - conversion critical
  '/contact': {
    initialBundle: 350 * 1024,
    totalSize: 500 * 1024,
    criticalResources: 6
  },
  
  // Default for other routes
  default: {
    initialBundle: PERFORMANCE_BUDGET.ROUTE_CHUNK_SIZE,
    totalSize: PERFORMANCE_BUDGET.ROUTE_CHUNK_SIZE * 1.5,
    criticalResources: PERFORMANCE_BUDGET.CRITICAL_REQUEST_COUNT
  }
};

/**
 * Check if file size exceeds budget
 */
export function checkFileBudget(filePath, fileSize) {
  const extension = filePath.substring(filePath.lastIndexOf('.'));
  
  for (const [category, config] of Object.entries(FILE_TYPE_BUDGETS)) {
    if (config.extensions.includes(extension)) {
      return {
        category,
        size: fileSize,
        maxSize: config.maxSize,
        warning: config.warning,
        exceedsWarning: fileSize > config.warning,
        exceedsLimit: fileSize > config.maxSize,
        percentage: Math.round((fileSize / config.maxSize) * 100)
      };
    }
  }
  
  return null;
}

/**
 * Analyze bundle against performance budget
 */
export function analyzeBundleBudget(bundleStats) {
  const results = {
    passed: true,
    warnings: [],
    errors: [],
    stats: {
      totalSize: 0,
      initialSize: 0,
      chunkCount: 0,
      assetCount: 0
    }
  };
  
  // Analyze individual files
  if (bundleStats.assets) {
    bundleStats.assets.forEach(asset => {
      const check = checkFileBudget(asset.name, asset.size);
      
      if (check) {
        results.stats.assetCount++;
        results.stats.totalSize += asset.size;
        
        if (check.exceedsLimit) {
          results.passed = false;
          results.errors.push(
            `${asset.name}: ${formatBytes(asset.size)} exceeds ${check.category} limit of ${formatBytes(check.maxSize)} (${check.percentage}%)`
          );
        } else if (check.exceedsWarning) {
          results.warnings.push(
            `${asset.name}: ${formatBytes(asset.size)} approaches ${check.category} limit (${check.percentage}%)`
          );
        }
      }
    });
  }
  
  // Check total bundle size
  if (results.stats.totalSize > PERFORMANCE_BUDGET.TOTAL_BUNDLE_SIZE) {
    results.passed = false;
    results.errors.push(
      `Total bundle size ${formatBytes(results.stats.totalSize)} exceeds limit of ${formatBytes(PERFORMANCE_BUDGET.TOTAL_BUNDLE_SIZE)}`
    );
  }
  
  return results;
}

/**
 * Format bytes to human readable format
 */
export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Generate performance budget report
 */
export function generateBudgetReport(bundleStats) {
  const analysis = analyzeBundleBudget(bundleStats);
  
  const report = {
    timestamp: new Date().toISOString(),
    passed: analysis.passed,
    summary: {
      totalSize: formatBytes(analysis.stats.totalSize),
      assetCount: analysis.stats.assetCount,
      budgetUtilization: Math.round((analysis.stats.totalSize / PERFORMANCE_BUDGET.TOTAL_BUNDLE_SIZE) * 100)
    },
    budget: {
      totalLimit: formatBytes(PERFORMANCE_BUDGET.TOTAL_BUNDLE_SIZE),
      initialBundleLimit: formatBytes(PERFORMANCE_BUDGET.INITIAL_BUNDLE_SIZE),
      routeChunkLimit: formatBytes(PERFORMANCE_BUDGET.ROUTE_CHUNK_SIZE)
    },
    issues: {
      errors: analysis.errors,
      warnings: analysis.warnings
    },
    recommendations: generateRecommendations(analysis)
  };
  
  return report;
}

/**
 * Generate optimization recommendations
 */
function generateRecommendations(analysis) {
  const recommendations = [];
  
  if (analysis.stats.totalSize > PERFORMANCE_BUDGET.TOTAL_BUNDLE_SIZE * 0.8) {
    recommendations.push('Consider code splitting to reduce initial bundle size');
    recommendations.push('Enable tree shaking to eliminate unused code');
    recommendations.push('Use dynamic imports for non-critical features');
  }
  
  if (analysis.errors.some(error => error.includes('images'))) {
    recommendations.push('Optimize images using WebP format');
    recommendations.push('Implement responsive images with different sizes');
    recommendations.push('Consider lazy loading for non-critical images');
  }
  
  if (analysis.errors.some(error => error.includes('javascript'))) {
    recommendations.push('Minify JavaScript code');
    recommendations.push('Remove unused dependencies');
    recommendations.push('Split large components into smaller chunks');
  }
  
  return recommendations;
}

export default PERFORMANCE_BUDGET;