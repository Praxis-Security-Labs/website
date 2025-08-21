// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Let Praxis handle base styles
    })
  ],
  output: 'static',
  site: 'https://praxis-website.pages.dev', // Will be updated with actual Cloudflare Pages URL
  build: {
    format: 'directory',
    inlineStylesheets: 'auto', // Inline small CSS files for better performance
    assets: '_astro', // Standard asset directory for Cloudflare Pages
  },
  compressHTML: true, // Minify HTML output
  prefetch: {
    prefetchAll: true, // Enable prefetching for better navigation performance
    defaultStrategy: 'hover', // Prefetch on hover for better UX
  },
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@/components': new URL('./src/components', import.meta.url).pathname,
        '@/utils': new URL('./src/utils', import.meta.url).pathname,
        '@/types': new URL('./src/types', import.meta.url).pathname,
        '@/layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@/styles': new URL('./src/styles', import.meta.url).pathname,
        '@/config': new URL('./src/config', import.meta.url).pathname,
      }
    },
    build: {
      // Optimize for Cloudflare Pages
      target: 'es2020', // Modern target for better performance
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code for better caching
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom'], // Pre-bundle React for faster dev builds
    }
  }
});
