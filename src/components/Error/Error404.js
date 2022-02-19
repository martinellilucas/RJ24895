import React from 'react';
import error404 from './404.png'
import './Error.scss'

export const Error404 = () => {
    return (
            <div className='container my-5'>
                <h2 className='header'>ERROR PAGINA NO ENCONTRADA !</h2>
                <hr className='hr'/>
                <img style={{marginLeft:'100px'}} src={error404} alt='error 404'/>      
            </div>
    )
}