import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context/app_context'
import { ModalProvider } from './context/modal_context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AppProvider>
  </React.StrictMode>
)
