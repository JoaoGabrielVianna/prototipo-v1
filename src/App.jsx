import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


import Navbar from './components/navbar/navigationbar'
import HomeScreen from './pages/home-page/home-page'
import FaculdadeScreen from './pages/faculdade-page/faculdade-page'
import DestaqueScreen from './pages/destaque-page/destaque-page'
import EventoScreen from './pages/eventos-page/eventos-page'
import ProfileScreen from './pages/profile-page/profile-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    </>
  )
}

export default App
