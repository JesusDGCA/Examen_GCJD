import './Carrusel.css';
import { useState, useEffect } from 'react';

const images = [
  '/src/assets/Empleados1.jpg',
  '/src/assets/empleados2.png',
  '/src/assets/empleados3.jpg'
];

const Carrusel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mb-4" id="carrusel">
      <h2 className="mb-3">Carrusel de empleados</h2>
      <div className="d-flex justify-content-center align-items-center">
        <img src={images[current]} alt="slide" className="img-fluid rounded shadow" style={{ maxHeight: 250 }} />
      </div>
      <div className="d-flex justify-content-center mt-2">
        {images.map((_, idx) => (
          <span key={idx} className={`mx-1 ${current === idx ? 'text-primary fw-bold' : 'text-secondary'}`}>•</span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
