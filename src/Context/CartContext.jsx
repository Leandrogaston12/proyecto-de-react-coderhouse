import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, newQuantity) =>{
    setCart(isInCart(item.id) ? [...cart] : [...cart, {...item,quantity:newQuantity}]);
  }
  // console.log('carrito: ', cart)

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
  <CartContext.Provider value={{
    clearCart,
    isInCart,
    removeProduct,
    addProduct,
    cart
    
  }}>
    
    {children}
    
    </CartContext.Provider>
  )
};

export default CartProvider;
