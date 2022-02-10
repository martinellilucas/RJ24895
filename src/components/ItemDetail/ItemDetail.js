import '../Item/Item.scss'
import Card from 'react-bootstrap/Card'


export const ItemDetail = ({id, nombre, desc, precio, img, stock, categoria }) => {
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
            </Card.Body>
        </Card>
    )
}