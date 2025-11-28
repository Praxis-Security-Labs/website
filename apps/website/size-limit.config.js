/**
 * Bundle Size Configuration (Size-Limit)
 * Modern replacement for performance-budget using size-limit
 * 
 * @see https://github.com/ai/size-limit
 */

// Bundle size limits (converted from performance-budget)
export const BUNDLE_SIZE_LIMITS = {
  // Total bundle size limit
  TOTAL_BUNDLE_SIZE: 2048 * 1024, // 2MB in bytes
  
  // Initial bundle (critical path)
  INITIAL_BUNDLE_SIZE: 250 * 1024, // 250KB
  
  // Route-specific chunks
  ROUTE_CHUNK_SIZE: 150 * 1024, // 150KB
  
  // Asset limits
  MAX_JS_SIZE: 512 * 1024, // 512KB per JS file
  MAX_CSS_SIZE: 128 * 1024, // 128KB per CSS file
  MAX_IMAGE_SIZE: 256 * 1024, // 256KB per image
  
  // Performance thresholds
  CRITICAL_REQUEST_COUNT: 10,
  MAX_DEPTH: 3
};

/**
 * Format bytes to human readable format
 * @param {number} bytes 
 * @returns {string}
 */
export function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Validate bundle sizes manually (for custom checks)
 * @param {Object} bundleStats 
 * @returns {Object}
 */
export function validateBundleSizes(bundleStats) {
  const warnings = [];
  const errors = [];
  
  // Check total bundle size
  if (bundleStats.totalSize > BUNDLE_SIZE_LIMITS.TOTAL_BUNDLE_SIZE) {
    errors.push(
      `Total bundle size ${formatBytes(bundleStats.totalSize)} exceeds limit of ${formatBytes(BUNDLE_SIZE_LIMITS.TOTAL_BUNDLE_SIZE)}`
    );
  }
  
  // Check initial bundle size
  if (bundleStats.initialSize > BUNDLE_SIZE_LIMITS.INITIAL_BUNDLE_SIZE) {
    warnings.push(
      `Initial bundle size ${formatBytes(bundleStats.initialSize)} exceeds recommended ${formatBytes(BUNDLE_SIZE_LIMITS.INITIAL_BUNDLE_SIZE)}`
    );
  }
  
  return {
    isValid: errors.length === 0,
    warnings,
    errors,
    summary: {
      totalUtilization: Math.round((bundleStats.totalSize / BUNDLE_SIZE_LIMITS.TOTAL_BUNDLE_SIZE) * 100),
      limits: {
        total: formatBytes(BUNDLE_SIZE_LIMITS.TOTAL_BUNDLE_SIZE),
        initial: formatBytes(BUNDLE_SIZE_LIMITS.INITIAL_BUNDLE_SIZE),
        routeChunk: formatBytes(BUNDLE_SIZE_LIMITS.ROUTE_CHUNK_SIZE)
      }
    }
  };
}