import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartProvider from "./Context/CartContext";
import ItemCart from "./components/Cart";

function App() {
  return (
    <div>
      
      <h1>Venta de ventiladores</h1>

      <CartProvider>
        <Navbar icono="https://cdn-icons-png.flaticon.com/512/107/107831.png" />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductList />} />
          <Route path="/products/:id" element={<CardDetail />} />
          <Route path="/404" element={<h2>404 Not Found</h2>} />
          <Route path="/cart" element={<ItemCart/>}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
