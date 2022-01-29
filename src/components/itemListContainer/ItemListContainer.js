
import { useEffect, useState } from 'react';
import { Boton } from '../ejemplos/Boton';
import { Clicker } from '../ejemplos/Clicker';
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList} from '../ItemList/ItemList'


export const ItemListContainer = ( { greeting } ) => {
  
  const [mostrar, setMostrar] = useState(true)

  const mostrarClicker = () => {
    setMostrar (!mostrar)
    console.log (mostrar)
  }

  const [loading, setLoading] = useState (false)
  const [productos, setProductos] = useState ([])

  useEffect (() =>{
    setLoading (true)
    pedirDatos()
        .then ( (res) => { // se toma como parametro la respuesta del resolve de la promesa
          setProductos ( res )
        })
        .catch( (err) => {
            console.log ("promesa rechazada")
        })
        .finally ( () =>{
          setLoading(false)
        })
  }, [])

  return (

    <section className="item-list-container">
      <h2>{greeting}</h2>
      <hr className='hr'></hr>
      <Boton clickear= {mostrarClicker}>Mostrar contador de clicks</Boton>
      <hr className='hr'></hr>
      {mostrar ? <Clicker></Clicker> : null}
      <>
      {
          loading 
            ? <h2>Loading...</h2>
            : <ItemList productos = {productos}/>
      }
      </>
      
    </section>

  );
};
