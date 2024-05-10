import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import App from './App'; 
import Habilidades from './pages/Habilidades';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import NotFoundPage from './pages/NotFoundPage'; 

const RoutesComponent = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesComponent;