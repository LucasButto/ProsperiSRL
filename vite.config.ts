import { defineConfig, type PluginOption } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { heroSrcSet, HERO_SIZES } from './src/config/heroImage.ts'

// The hero <img> lives inside a React component, so the browser can't discover
// it until the JS bundle has downloaded, parsed and rendered. Preloading it from
// the HTML head starts that fetch immediately instead, in parallel with the JS.
function heroPreload(isDev: boolean): PluginOption {
  return {
    name: 'hero-preload',
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          injectTo: 'head-prepend',
          attrs: {
            rel: 'preload',
            as: 'image',
            imagesrcset: heroSrcSet(isDev),
            imagesizes: HERO_SIZES,
            fetchpriority: 'high',
          },
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    heroPreload(command === 'serve'),
  ],
}))
