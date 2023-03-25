// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// imports for react router
import { BrowserRouter } from 'react-router-dom'

// File imports (components and styles)
import App from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
