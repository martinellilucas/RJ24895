
import { useEffect, useState } from 'react';
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList} from '../ItemList/ItemList'


export const ItemListContainer = ( { greeting } ) => {
  
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
      <>
      {
          loading 
            ? <div>
                <h2>LOADING..</h2>
              </div>
            : <ItemList productos = {productos}/>
      }
      </>
      
    </section>

  );
};
