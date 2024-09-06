import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SobreNos from './components/SobreNos/SobreNos';

function App() {
  return (
    <>
      <Router>
        {/* O Navbar está fora das rotas para aparecer em todas as páginas */}
        <Navbar />

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNos" element={<SobreNos />} />
        </Routes>

        {/* O Footer também estará visível em todas as páginas */}
        <Footer />
      </Router>
    </>
  );
}

export default App;