import { Boton } from "./Boton"
import { useEffect, useState } from 'react'

export const Clicker = () => {

    //let clicks = 0 este contador con su funcion aumentar, funciona, pero en el dom no es actualizado
    //se debe realizar mediante el estado

    const [clicks , setClicks] = useState(0) //valor inicial del estado

    const aumentar = () => {
        setClicks( clicks + 1 )
        console.log (clicks)
    }

    useEffect ( () => {
        console.log ("Clicker Montado")
    }, [])

    return (
        <>
         <Boton clickear= {aumentar}>Click me!</Boton>
         <hr className='hr'></hr>
         <p> Clicks: {clicks}</p>
         <p>Fecha y Hora último click: { new Date ().toLocaleString()}</p>
         <hr className='hr'></hr>
        </>
    )
}