import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login'


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';



function App() {

  return (
    <>
      <Login />
      <Navbar />
      <Home />
    </>
  );
}







export default App
