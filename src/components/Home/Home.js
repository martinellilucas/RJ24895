import React from "react";
import { Contenedor } from "../ejemplos/Contenedor";
import inicio1 from './inicio1.jpg';
import inicio2 from './inicio2.jpg';
import inicio3 from './inicio3.jpg';
import './Home.scss';
import { ItemListContainer } from "../itemListContainer/ItemListContainer";

export const Home = () => {
   return (
       <>
        <img className='imagen' src={inicio3} alt='imagen'/>
       <Contenedor>
           <h2 className="titulo">Bienvenidos a Zaida indumentaria</h2>
           <hr/>
            <ItemListContainer/>
       </Contenedor>
       </>
      
   )
    
}