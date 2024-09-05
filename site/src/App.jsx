import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SobreNos from './components/SobreNos/SobreNos'



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <SobreNos />
    </>
  );
}







export default App
