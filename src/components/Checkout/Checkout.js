import '../Cart/Carrito.scss'
import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Navigate } from "react-router-dom"
import { validar } from './validar'
import { generarOrden } from '../../firebase/generarOrden'
import { Orden } from './Orden'


export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext (CartContext)

    const [orderId, setOrderId] = useState (null)
    
    const [values, setValues] = useState ({
        nombre: '',
        email: '',
        tel: ''
    })
    
    const handleInputChange = (e) => {
     
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        validar(values) && generarOrden (values, cart, totalCart, setOrderId, vaciarCart)
    }


    if (orderId) {
        return (
           <Orden orderId={orderId}/>
        )
    }

    if (cart.length === 0) {
        return (<Navigate to="/"/>)
    }

    return (
        <div className="container">
            <h2 className='cart-header m-2'>Para finalizar la compra por favor ingrese los datos correspondientes</h2>
            <hr/>
            <div className="my-5 container">
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control my-2"
                        type='text'
                        placeholder='Nombre'
                        value={values.nombre}
                        onChange={handleInputChange}
                        name='nombre'
                     />
                     <input
                        className="form-control my-2"
                        type='email'
                        placeholder='Email'
                        value={values.email}
                        onChange={handleInputChange}
                        name='email'
                     />
                     <input
                        className="form-control my-2"
                        type='tel'
                        placeholder='Teléfono'
                        value={values.tel}
                        onChange={handleInputChange}
                        name='tel'
                     />
                    <button type="submit" className="my-button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}