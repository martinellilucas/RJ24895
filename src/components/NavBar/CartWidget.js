import cartwidget from './cartreg.png'
import { Link } from "react-router-dom";

export const CartWidget = () =>{
    return (
        <Link to='/carrito'>
        <img src={cartwidget} alt="Cart widget"/>
        </Link>
    )
}