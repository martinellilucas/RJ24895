import logo from "./logo.svg";
import "./App.css";
import Seccion from "./Seccion.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HOLA MUNDO !</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <Seccion/>
    </div>
  );
}

export default App;
