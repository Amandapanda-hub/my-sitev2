import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default {
  assetsInclude: ['**/*.png'],
  plugins: [
    react(),
    svgr()
  ]
}
