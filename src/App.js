import "./styles/styles.scss";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Waves } from "./components/waves/Waves.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Carrito } from "./components/Carrito"; 
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Home } from "./components/Home/Home";

function App() {
  return (
   
    <BrowserRouter>

      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer greeting="Bienvenidos a Zaida indumentaria." />}/>
        <Route path="/productos/:catId" element={<ItemListContainer greeting="Bienvenidos a Zaida indumentaria." />}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="*" element={ <Error404/>}/>
      </Routes>

      <Waves/>

    </BrowserRouter>
    
  );
}

export default App;
