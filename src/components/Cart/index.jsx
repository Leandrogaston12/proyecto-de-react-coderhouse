import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./cart.module.scss";



const ItemCart = () => {
  const { cart } = useContext(CartContext);


  return (
    <div>
      {cart.map((producto, index) => (
          <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={producto.image} alt={producto.title} />
          </div>
          <div className={styles.detailsContainer}>
            <h3 className={styles.title}>{producto.title}</h3>
            <p className={styles.price}>$ {producto.price}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.buyNowButton}>Comprar ahora</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
