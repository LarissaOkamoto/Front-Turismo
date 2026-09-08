import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routes } from './routes'
import { RouterProvider } from 'react-router-dom'
import style from './pages/Home/styles.module.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
)
