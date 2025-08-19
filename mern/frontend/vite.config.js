import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_URL = import.meta.env.VITE_API_URL;
fetch(`${API_URL}/api/hello`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
