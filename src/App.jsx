import "./App.css";
import Button from "./components/Button";
import ItemLastContainer from "./components/ItemLastContainer";
import Navbar from "./components/Navbar";

function App() {
  return (   
    <div>
      <Navbar icono= "https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
      <h1>Venta de ventiladores</h1>
      <ItemLastContainer greeting="Esta es mi pagina la cual se va a basar en un e-comerce de ventiladores"/>
      <Button texto="Inicio" />
      <Button texto="Nosotros" />
    </div>
  );
}

export default App;
