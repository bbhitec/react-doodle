import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'   // importing an nmp-ed bootsrap here will allow using it in all components
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // [demo, bp] installing a query provider context

const queryClient = new QueryClient();

// [demo] define root container to render virtual DOM to
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
