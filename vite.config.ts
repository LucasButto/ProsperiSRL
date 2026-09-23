import { defineConfig, type PluginOption } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { HERO_SRC } from './src/config/heroImage.ts'

// The hero <img> lives inside a React component, so the browser can't discover
// it until the JS bundle has downloaded, parsed and rendered. Preloading it from
// the HTML head starts that fetch immediately instead, in parallel with the JS.
function heroPreload(): PluginOption {
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
            href: HERO_SRC,
            fetchpriority: 'high',
          },
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    heroPreload(),
  ],
})
