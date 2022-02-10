import "./styles/styles.scss";

import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Waves } from "./components/waves/Waves.js";
import { PokeApi } from "./components/ejemplos/PokeApi/PokeApi";

function App() {
  return (
    <>
      <NavBar />
      <PokeApi/>
      <ItemListContainer greeting="Bienvenidos a Zaida indumentaria." />
      <Waves />
    </>
  );
}

export default App;
