import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cadastrar from './components/cadastrar/Cadastrar'



function App() {

  return (
    <>
      <Cadastrar />
      <Login/>
      {/* <Home/>
      <Navbar />
       */}
    </> 
  );
}







export default App
