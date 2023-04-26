import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./cart.module.scss";
import { FaTrash } from "react-icons/fa";



const ItemCart = () => {
  const { cart , removeProduct , clearCart, totalCompra } = useContext(CartContext);


  return (
    <div>
        {cart.map((producto, index) => (
        <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={producto.image} alt={producto.title} />
            </div>
                <div className={styles.detailsContainer}>
                    <h3 className={styles.title}>{producto.title}</h3>
                    <p className={styles.price}>Precio por unidad: $ {producto.price}</p>
                    <p className={styles.price}>Cantidad seleccionada : {producto.quantity}</p>
                    <p className={styles.price}>Subtotal: ${producto.quantity * producto.price}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.botonCarrito} onClick={() => removeProduct(producto.id)}>
                            <FaTrash /> </button>
                        </div>
                </div>
        </div>
      ))}
        <div className={styles.totalContainer}>
            <p className={styles.total}>Total: ${totalCompra}</p>
        </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.botonCarrito} onClick={() => clearCart([])}>Vaciar carrito</button>
                <button className={styles.buyNowButton}>Continuar compra</button>
            </div>
    </div>
  );
};

export default ItemCart;
