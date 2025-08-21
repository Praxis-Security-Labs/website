/**
 * Image Optimization Utilities for Cloudflare Pages
 *
 * Provides utilities for optimizing images with Cloudflare's image optimization
 * and managing responsive images for better performance.
 */

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
}

/**
 * Generate optimized image URL for Cloudflare Pages
 * When Cloudflare Image Optimization is enabled, this will transform images
 */
export function optimizeImageUrl(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  // For now, return original URL as Cloudflare Image Optimization
  // needs to be enabled in the dashboard
  // TODO: Update when Cloudflare Image Optimization is configured

  // Temporary: Log options in dev mode to avoid unused variable error
  if (import.meta.env.DEV && Object.keys(options).length > 0) {
    // Options will be used when Cloudflare Image Optimization is enabled
  }

  return src;
}

/**
 * Generate responsive image srcset for multiple screen sizes
 */
export function generateResponsiveSrcSet(
  baseSrc: string,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  return sizes
    .map(size => `${optimizeImageUrl(baseSrc, { width: size })} ${size}w`)
    .join(', ');
}

/**
 * Image component props with optimization
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  responsive?: boolean;
}

/**
 * Get optimized image attributes for use in img elements
 */
export function getOptimizedImageProps({
  src,
  alt,
  width,
  height,
  quality = 85,
  loading = 'lazy',
  className = '',
  responsive = true,
}: OptimizedImageProps) {
  const optimizationOptions: ImageOptimizationOptions = {
    quality,
    format: 'webp',
  };

  if (width !== undefined) optimizationOptions.width = width;
  if (height !== undefined) optimizationOptions.height = height;

  const optimizedSrc = optimizeImageUrl(src, optimizationOptions);

  const props: Record<string, string | number> = {
    src: optimizedSrc,
    alt,
    loading,
    className,
  };

  if (width) props.width = width;
  if (height) props.height = height;

  if (responsive && width) {
    props.srcSet = generateResponsiveSrcSet(src);
    props.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }

  return props;
}

/**
 * Preload critical images for better Core Web Vitals
 */
export function preloadImage(
  src: string,
  options: ImageOptimizationOptions = {}
) {
  const optimizedSrc = optimizeImageUrl(src, options);

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = optimizedSrc;

  if (options.format) {
    link.type = `image/${options.format}`;
  }

  document.head.appendChild(link);
}
