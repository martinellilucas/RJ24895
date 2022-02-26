import React from "react";
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
          
        <div className="container">
            <h4 className="header my-5">Bienvenidos a Zaida® indumentaria.</h4>
            <hr/>
              <ItemListContainer/>
        </div>
       </>
      
   )
    
}