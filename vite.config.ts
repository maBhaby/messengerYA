import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    port: 3000,
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
    ],
  },
})
