import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { BsFillTrashFill } from 'react-icons/bs'


export const Carrito = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext (CartContext)
    
    return (
        <div className='container my-4'>
            <h2>Tu carrito</h2>
            <hr className='hr'/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button className='btn btn-danger my-4' onClick={() => eliminarItem(item.id)}>
                            <BsFillTrashFill/>
                        </button>
                    </div>
                ))
            }
            <hr className='hr'/>
            <h2>Total: ${totalCart()}</h2>

            <div className='my-2'>
                <button className='btn btn-danger' onClick={vaciarCart}>Vaciar carrito</button>
                <button className='btn btn-success mx-2'>Terminar compra</button>
            </div>
        </div>
    )
}