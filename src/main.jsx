import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkToggleProvider } from './components/context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkToggleProvider>
      <App />
    </DarkToggleProvider>
  </StrictMode>,
)
