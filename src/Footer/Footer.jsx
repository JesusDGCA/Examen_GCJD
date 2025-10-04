import './Footer.css';

const Footer = () => (
    <footer className="footer bg-dark text-white text-center py-3 mt-5" id="footer">
        <p>Examen de primer parcial - Desarrollo móvil integral</p>
        <small>&copy; {new Date().getFullYear()} UTL</small>
    </footer>
);

export default Footer;