import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";
import ItemLastContainer from "./components/ItemLastContainer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [productos, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(productos);
  return (
    <div>
      <Navbar icono="https://cdn-icons-png.flaticon.com/512/107/107831.png" />

      <h1>Venta de ventiladores</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/category/:categoryName"
          element={<ProductList/>}
        />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
      </Routes>
      <ItemLastContainer greeting="Esta es mi pagina la cual se va a basar en un e-comerce de ventiladores" />
    </div>
  );
}

export default App;
