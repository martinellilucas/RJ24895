import { CartWidget } from "./CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="header">
      <h1>ZAIDA</h1>
      <nav className="header-nav">
        <p className="header-link">Home</p>
        <p className="header-link">Contacto</p>
        <p className="header-link">Nosotros</p>
      </nav>

      <CartWidget className="cart-widget" />
    </header>
  );
};
