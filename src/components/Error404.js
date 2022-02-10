import React from 'react';
import error404 from './404.png'

export const Error404 = () => {
    return (
        <div className='container'>
            <h2>ERROR PAGINA NO ENCONTRADA !</h2>
            <hr className='hr'/>
            <img src={error404} alt='error 404'/>
        </div>
    )
}