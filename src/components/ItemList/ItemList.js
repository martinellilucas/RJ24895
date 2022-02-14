import { Item } from "../Item/Item";
import { Contenedor } from "../ejemplos/Contenedor"
import { ProductBar } from "../ProductBar/ProductBar";

export const ItemList = ( {productos} ) => {
    return (
        <Contenedor className = "productos">
           <ProductBar/>
            <div className="row">
                { productos.map ((el) => <Item key={el.id} nombre={el.nombre}{...el}/>)}
            </div>
        </Contenedor>
      

    )
}