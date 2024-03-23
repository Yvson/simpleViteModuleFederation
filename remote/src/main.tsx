import React from 'react'
import ReactDOM from 'react-dom/client'
import RemoteCounter from './RemoteCounter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RemoteCounter />
  </React.StrictMode>,
)
