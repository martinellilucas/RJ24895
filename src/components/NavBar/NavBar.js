
import { CartWidget } from './CartWidget';
import './NavBar.css';

export const NavBar = () =>{

    return(
        <header className='header'>
            <h1>web desing</h1>
            <nav className='header-nav'>
                <p className='header-link'>Enlace 1</p>
                <p className='header-link'>Enlace 2</p>
                <p className='header-link'>Enlace 3</p>
            </nav>  
            <CartWidget className='cart-widget'/>
        </header>
        )
        
}