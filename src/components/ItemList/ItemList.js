import { Item } from "../Item/Item";
import { Contenedor } from "../ejemplos/Contenedor"

export const ItemList = ( {productos} ) => {
    return (
        <Contenedor>
            <h2>Productos</h2>
            <hr className="hr"></hr>
            <div className="row">
                { productos.map ((el) => <Item nombre={el.nombre} {...el}/>)}
            </div>
        </Contenedor>
      

    )
}