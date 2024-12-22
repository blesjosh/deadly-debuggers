import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Members  from './components/Members.jsx'
import Gallery from './components/gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/member-page' element={<Members/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
