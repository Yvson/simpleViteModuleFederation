// vite.config.js
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

export default {
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remoteApp: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: "ES2022"
  }
}