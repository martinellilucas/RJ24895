import React from "react";
import { Contenedor } from "../ejemplos/Contenedor";
import inicio1 from './inicio1.jpg';
import inicio2 from './inicio2.jpg';
import inicio3 from './inicio3.jpg';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel'
import { ItemListContainer } from "../itemListContainer/ItemListContainer";
import { CarouselItem } from "react-bootstrap";

export const Home = () => {
   return (
       <>
       <Carousel interval={2500}>
           <CarouselItem>
                <img className='imagen' src={inicio1} alt='imagen'/>
           </CarouselItem>
           <CarouselItem>
             <img className='imagen' src={inicio2} alt='imagen2'/>
           </CarouselItem>
           <CarouselItem>
             <img className='imagen' src={inicio3} alt='imagen3'/>
           </CarouselItem>
       </Carousel>
        
       <Contenedor>
           <h2 className="titulo">Bienvenidos a Zaida® indumentaria.</h2>
           <hr/>
            <ItemListContainer/>
       </Contenedor>
       </>
      
   )
    
}