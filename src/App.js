import "./styles/styles.scss";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Waves } from "./components/waves/Waves.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/Contacto/Contacto";
import { Carrito } from "./components/Cart/Carrito"; 
import { Error404 } from "./components/Error/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Checkout } from "./components/Checkout/Checkout";
import { Home } from "./components/Home/Home";
import { CartProvider } from './components/CartContext/CartContext.js'

function App() {
  return (

   <CartProvider>

      <BrowserRouter>

        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:catId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={ <Error404/>}/>
        </Routes>

        <Waves/>

      </BrowserRouter>

   </CartProvider>
    
  );
}

export default App;
