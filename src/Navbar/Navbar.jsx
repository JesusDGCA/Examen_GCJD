import './Navbar.css';

/* Creacion de la barra de navegacion */
const Navbar = () => {
  return (
    <nav className="navbar">
      <span style={{ fontWeight: 'bold' }}>Registro de empleados</span>
      <div>
        <a href="#crud">Empleados</a>
        <a href="#carrusel">Carrusel</a>
      </div>
    </nav>
  );
};

export default Navbar;
