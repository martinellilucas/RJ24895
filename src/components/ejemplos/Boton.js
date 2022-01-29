import { Button } from 'react-bootstrap'
import './Boton.scss'

export const Boton = ( {children, clickear} ) => {

    return (
        <Button className='my-button' onClick={clickear}>{children}</Button>
    )
}