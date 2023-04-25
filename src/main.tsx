import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// importing an nmp-ed bootsrap here will allow using it in all components
import 'bootstrap/dist/css/bootstrap.css'

// [demo] define root container to render virtual DOM to
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
