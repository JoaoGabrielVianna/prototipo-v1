import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './pages/home-page/home-page.jsx'
import FaculdadeScreen from './pages/faculdade-page/faculdade-page.jsx'
import DestaqueScreen from './pages/destaque-page/destaque-page.jsx'
import EventoScreen from './pages/eventos-page/eventos-page.jsx'
import ProfileScreen from './pages/profile-page/profile-page.jsx'


const router = createBrowserRouter([
  {
    path: '/faculdade',
    element: <FaculdadeScreen/>
  },
  {
    path: '/destaque',
    element: <DestaqueScreen/>
  },
  {
    path: '/',
    element: <HomeScreen/>
  },
  {
    path: '/eventos',
    element: <EventoScreen/>
  },
  {
    path: '/profile',
    element: <ProfileScreen/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
