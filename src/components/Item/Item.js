import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ( {id, nombre, precio, img, stock} ) => {

    return (

        <Card style = {{ 
            width: '16rem',
            margin: '10px',    
        }}>
            <Card.Img className="img" variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                     En stock: {stock}
                </Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button className='my-button'>Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}