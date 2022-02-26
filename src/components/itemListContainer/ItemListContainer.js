
import { useEffect, useState } from 'react';
import './ItemListContainer.scss'
import { ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import cargando from './cargando.gif'
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';



export const ItemListContainer = ( { greeting } ) => {
  
  const [loading, setLoading] = useState (false)
  const [productos, setProductos] = useState ([])

  const { catId } = useParams()


  useEffect ( () => {

    setLoading (true)
    
    //1- armar referencia
    
    const productosRef = collection (db, 'productos')
    const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
    
    //2- pedir esa referencia
    
    getDocs(q)
      .then ((resp) => {
        setProductos(resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        } )) 
      })
      .finally (() => setLoading(false))

      }, [catId])

  return (

    <section className="item-list-container">
      <h2>{greeting}</h2>
      <hr/>
      <>
        {
            loading 
              ? <div>
                  <h2>Loading..</h2>
                  <hr className='hr'/>
                  <img className='cargando'src={cargando} alt='cargando'></img>
                </div>
              : <ItemList productos = {productos}/>
        }
      </>
      
    </section>

  );
};
