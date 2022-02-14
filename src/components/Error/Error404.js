import React from 'react';
import { Contenedor } from "../ejemplos/Contenedor";
import error404 from './404.png';

export const Error404 = () => {
    return (
        <>
        <Contenedor>
            <h2 style={{margin:'40px'}}>ERROR PAGINA NO ENCONTRADA !</h2>
            <hr className='hr'/>
            <img style={{marginLeft:'100px'}} src={error404} alt='error 404'/>
        </Contenedor>
        </>
    )
}