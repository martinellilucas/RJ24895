import { Link } from "react-router-dom";
import './ProductBar.scss';

export const ProductBar = () => {
  return (
    <>
      <header className="catalogo">
        <Link to="/productos" className="catalogo-titulo">
          <h2>Productos</h2>
        </Link>
        <nav className="catalogo-nav">
          <Link to="/productos/remeras" className="catalogo-link">
            Remeras
          </Link>
          <Link to="/productos/vestidos" className="catalogo-link">
            Vestidos
          </Link>
          <Link to="/productos/blusas" className="catalogo-link">
            Blusas
          </Link>
          <Link to="/productos/pantalones" className="catalogo-link">
            Pantalones
          </Link>
        </nav>
      </header>
      <hr/>
    </>
  );
};
