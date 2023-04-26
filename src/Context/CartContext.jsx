import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    setCart(isInCart(item.id) 
      ? cart.map(product => 
          product.id === item.id 
            ? {...product, quantity: product.quantity + quantity}
            : product
        )
      : [...cart, {...item, quantity}]
    );
  };


  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));


  const totalCompra = cart.reduce((accumulator, currentProduct) => accumulator + (currentProduct.price * currentProduct.quantity), 0);

  return (
  <CartContext.Provider value={{
    clearCart,
    isInCart,
    removeProduct,
    addProduct,
    totalCompra,
    cart
    
  }}>
    
    {children}
    
    </CartContext.Provider>
  )
};

export default CartProvider;
