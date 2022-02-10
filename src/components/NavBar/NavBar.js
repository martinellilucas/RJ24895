import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="header">
      <Link className="logo" to='/'>
        <h1>ZAIDA®</h1>  
      </Link>
      <nav className="header-nav">
        <Link to='/' className="header-link">Home</Link>
        <Link to='/productos' className="header-link">Productos</Link>
        <Link to="/contacto" className="header-link">Contacto</Link>
        <Link to="/nosotros" className="header-link">Nosotros</Link>
      </nav>
      <CartWidget className="cart-widget" />
    </header>
  );
};
