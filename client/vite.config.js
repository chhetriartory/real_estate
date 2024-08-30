import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //creating the proxy for the api calls
  server: {
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false
      }
    }
  },
  plugins: [react()],
})
