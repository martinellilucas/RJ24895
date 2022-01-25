
import "./styles.css";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido Coder!" />
    </>
  );
}

export default App;
