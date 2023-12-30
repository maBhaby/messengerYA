import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
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
