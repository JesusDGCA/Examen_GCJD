import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Carrusel from './Carrusel/Carrusel.jsx';
import Crud from './CRUDdeEmpleados/CRUD.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Carrusel />
    <App />
    <Crud />
  </StrictMode>
);
