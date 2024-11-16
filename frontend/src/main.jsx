import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Front from './Front'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Front />
  </StrictMode>,
)
