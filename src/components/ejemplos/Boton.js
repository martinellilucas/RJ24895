import './Boton.scss'

export const Boton = ( {children, clickear} ) => {

    return (
        <button className='my-button' onClick={clickear}>{children}</button>
    )
}