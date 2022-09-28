import '../assets/style/header/tittle.css'
import '../assets/style/header/navbar.css'
import '../assets/style/header/social.css'
import '../assets/style/header/header.css'
import '../assets/style/header/header.css'
import 'https://kit.fontawesome.com/56c91e3d04.js'



function Header() {
  return (
    <header>
        <div className="item title">
            <h1>Casas<span>Chiapas</span></h1>
        </div>

        <div className="item menu">
            <ul className="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li className="center"><a href="#casas">Casas</a></li>
                <li className="upward"><a href="#contacto">Contactanos</a></li>
                <li className="upward"><a href="#terrenos">Terrenos</a></li>
                <li className="forward"><a href="#footer">Nosotros</a></li>
            </ul>
        </div>

        <div className="item social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
        </div>
    </header>
  );
}
export default Header;
