import cartwidget from './cartreg.png'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './NavBar.scss'

export const CartWidget = () => {

    const { cantidadCart } = useContext(CartContext)

    return (
        <Link to='/carrito'>
            <img src={cartwidget} alt="Cart widget"/>
            <span className='cantidadCart'>{cantidadCart()}</span>
        </Link>
    )
}