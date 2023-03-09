import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hola Mundo</h1>
      <Button texto="Inicio" />
      <Button texto="Nosotros" />
    </div>
  );
}

export default App;
