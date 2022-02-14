
import { useEffect, useState } from 'react';
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';


export const ItemListContainer = ( { greeting } ) => {
  
  const [loading, setLoading] = useState (false)
  const [productos, setProductos] = useState ([])

  const { catId } = useParams()


  useEffect ( () => {
    setLoading (true)

    pedirDatos()
        .then ( (res) => { // se toma como parametro la respuesta del resolve de la promesa
          if (catId) {
            setProductos ( res.filter((el) => el.categoria === catId ) )
          } else{
            setProductos(res)
          }
        })
        .catch( (err) => {
            console.log ("promesa rechazada")
        })
        .finally ( () =>{
          setLoading(false)
        })
  }, [catId])

  return (

    <section className="item-list-container">
      <h2>{greeting}</h2>
      <hr/>
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
