import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App
