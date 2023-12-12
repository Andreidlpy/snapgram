import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://cloud.appwrite.io/v1'
    }
  },
  build: {
    manifest: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})