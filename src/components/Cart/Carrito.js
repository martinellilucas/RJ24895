import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Carrito.scss'

export const Carrito = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext (CartContext)
    
    if (cart.length === 0) {
        return (<>
            <div className='container my-5'>
                <h4 className='header'>Tu carrito está vacío !</h4>
                <hr/>
                <Link to={'/'}>
                    <button className='my-button'>Volver</button>
                </Link>
            </div>
        </>)
    }

    return (
        <div className='container my-4'>
            <h2 className='cart-header'>Tu carrito</h2>
            <hr className='hr'/>
            {
                cart.map((item) => (
                    <div className='cart-item' key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button className='my-button my-m2' onClick={() => eliminarItem(item.id)}>
                            <BsFillTrashFill/>
                        </button>
                    </div>
                ))
            }
            <hr className='hr'/>
            <h2 className='cart-header'>Total: ${totalCart()}</h2>

            <div className='my-2'>
                <button className='my-button' onClick={vaciarCart}>Vaciar carrito</button>
                <button className='my-button mx-2'>Terminar compra</button>
            </div>
        </div>
    )
}