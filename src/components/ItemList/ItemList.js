import { Item } from "../Item/Item";
import { ProductBar } from "../ProductBar/ProductBar";

export const ItemList = ( {productos} ) => {
    
    return (
        <div className = "productos">
           <ProductBar/>
            <div className="row">
                { productos.map ( (el) => <Item key={el.id} {...el}/>)}
            </div>
        </div>
    )
}