import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.scss'

export const Item = ( {nombre, precio, img, desc} ) => {

    return (

        <Card style = {{ width: '16rem',
                         margin: '10px'      
        }}>
            <Card.Img className="img" variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Button className='my-button'>Ver más</Button>
            </Card.Body>
        </Card>
    )
}