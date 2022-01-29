import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const Item = ( {nombre, precio, img, desc} ) => {

    return (

        <Card style = {{ width: '22rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Button variant='success'>Ver más</Button>
            </Card.Body>
        </Card>
    )
}