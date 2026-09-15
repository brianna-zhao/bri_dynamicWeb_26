import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import RecipeCard from './RecipeCard/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeCard />
  </StrictMode>,
)
