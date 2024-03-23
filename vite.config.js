import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


//https://sourylime.github.io/react-folio/



export default defineConfig({
  base: "/react-folio/",
  plugins: [react()],
})
