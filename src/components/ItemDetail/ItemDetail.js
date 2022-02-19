import '../Item/Item.scss'
import Card from 'react-bootstrap/Card'
import { ItemCount } from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'


export const ItemDetail = ({id, nombre, desc, precio, img, stock, categoria }) => {
   
   const [cantidad, setCantidad] = useState (0)

   const { agregarAlCarrito, isInCart } = useContext(CartContext) 

   const handleAgregar = () => {

       if (cantidad === 0) return
       
       if ( !isInCart (id) ){
           
           const addItem = {
               id, nombre, precio, stock, cantidad
           }
           agregarAlCarrito(addItem)

       }
   }
   
    return (
        <div>

            <Card style = {{ width: '18rem',
                            marginTop: '10px',
                            marginLeft: '500px'      
            }}>
                <Card.Img className="img" variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {desc}   
                    </Card.Text>
                    <Card.Text>En stock: {stock}</Card.Text>
                    <Card.Text>Precio: ${precio}</Card.Text>
                    {
                        isInCart (id)
                        ? <Link to='/carrito'>
                            <button className='my-button'>
                                Terminar compra
                            </button>
                        </Link>
                        : <>
                            <ItemCount 
                                max={stock}
                                counter={cantidad}
                                setCounter={setCantidad}
                            />
                            <button style={{marginLeft:'35px'}} onClick={handleAgregar} className='my-button'>Agregar al carrito</button>
                          </>
                    }
                </Card.Body>
            </Card>

        </div>
    )
}