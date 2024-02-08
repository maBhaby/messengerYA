import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: '/chat'
  },
  resolve: {
    alias: [
      {
        find: '@static',
        replacement: path.resolve(
          __dirname,
          'src',
          'static'
        ),
      },
      {
        find: '@',
        replacement: path.resolve(
          __dirname,
          'src'
        ),
      }
    ],
  },
})
