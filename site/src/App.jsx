import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/button'
import logo from '../src/assets/logotech.png'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>

    </>
  )
}

export default App
