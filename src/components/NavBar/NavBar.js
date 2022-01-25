
import { CartWidget } from './CartWidget';
import './NavBar.css';

export const NavBar = () =>{

    return(
        <header className='header'>
            <h1>ZAIDA</h1>
            <nav className='header-nav'>
                <p className='header-link'>Enlace 1</p>
                <hr/>
                <p className='header-link'>Enlace 2</p>
                <hr/>
                <p className='header-link'>Enlace 3</p>
                <hr/>
            </nav>
            <CartWidget className='cart-widget'/>
        </header>
        )
        
}