// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/signin.html'),
        nested1: resolve(__dirname, 'src/signInComp.html'),
        nested2: resolve(__dirname, 'src/signup.html'),
        nested3: resolve(__dirname, 'src/signUpComp.html'),
        nested4: resolve(__dirname, 'src/dashboard.html'),
      },
    },
  },
})