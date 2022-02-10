import { Item } from "../Item/Item";
import { Contenedor } from "../ejemplos/Contenedor"
import './ItemList.scss'

export const ItemList = ( {productos} ) => {
    return (
        <Contenedor className = "productos">
            <h2>Catálogo:</h2>
            <hr className="hr"></hr>
            <div className="row">
                { productos.map ((el) => <Item nombre={el.nombre}{...el}/>)}
            </div>
        </Contenedor>
      

    )
}