import "./styles/styles.scss";

import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Waves } from "./components/waves/Waves.js";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido Coder!" />
      <Waves />
    </>
  );
}

export default App;
