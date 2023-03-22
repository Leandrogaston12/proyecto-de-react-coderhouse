import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ItemLastContainer from "./components/ItemLastContainer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

  function App() {
  const [productos, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data?.products);
      });
  }, []);


  return (
    <div>
        <Navbar icono="https://cdn-icons-png.flaticon.com/512/107/107831.png" />

        <h1>Venta de ventiladores</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList productos={productos}/>} />
        </Routes>
        <ItemLastContainer greeting="Esta es mi pagina la cual se va a basar en un e-comerce de ventiladores" />
    </div>
  );
}

export default App;
