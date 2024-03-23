import federation from "@originjs/vite-plugin-federation";

export default {
  plugins: [
    federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        exposes: {
            './RemoteCounter': './src/RemoteCounter.tsx',
        },
        shared: ['react', 'react-dom']
    }),
  ],
  build: {
    target: "ES2022"
  },
}