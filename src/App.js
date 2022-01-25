
import "./styles.css";
import { ReactComponent as Waves } from "./wave.svg";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido Coder!" />
      <Waves className= 'waves' />
    </>
  );
}

export default App;
