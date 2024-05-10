import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'; // Importa el componente Routes
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes /> {/* Renderiza el componente Routes */}
  </React.StrictMode>,
  document.getElementById('root')
);