// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/signin.html'),
        nested: resolve(__dirname, 'src/signinComp.html'),
        nested: resolve(__dirname, 'src/signup.html'),
        nested: resolve(__dirname, 'src/signUpComp.html'),
        nested: resolve(__dirname, 'src/dashboard.html'),
      },
    },
  },
})