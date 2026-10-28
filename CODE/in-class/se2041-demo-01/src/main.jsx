import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='210366288111-5ui9lpejfvksea990as4rdlp0j2jkcsg.apps.googleusercontent.com'>
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
   </GoogleOAuthProvider>,
)
