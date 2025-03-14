import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuLateral from './components/MenuLateral'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuLateral/>
    
    
  </StrictMode>,
)
