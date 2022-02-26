
import { Link } from "react-router-dom"

export const Orden = ({orderId}) => {
    return (
        <div className="container">
            <h2 className="cart-header m-5">¡ Gracias por tu compra !</h2>
            <hr/>
            <h3>Tu orden de compra es: {orderId}</h3>
            <Link to="/">
                <button className="my-button">Volver</button>
            </Link>
        </div>
    )
}