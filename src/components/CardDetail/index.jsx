import { useContext, useEffect, useState } from "react";
// aca estoy importando el useCart context 
import { CartContext } from "../../Context/CartContext";
import { Navigate, useParams } from "react-router-dom";
import styles from "./cardDetail.module.scss";
import db from "../../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CardDetail = () => {
  const {addProduct} = useContext(CartContext)
  const [producto, setProducto] = useState({});
  const [loading, setloading] = useState(true)
  const { id } = useParams();

  const itemRef = doc(db, "items" , id)

    
  const getProducto = async () => {
   const itemDoc = await getDoc (itemRef)
   const item = itemDoc.data()
   setProducto(item) 
   setloading(false)
  }

  useEffect(() => {
    getProducto();
  }, []);
  
  if (!producto) {
    return <Navigate to="/404" />;
    
  }
  
  if(loading) {
    return  <div className={styles.loader}></div>
  }

  
return (
  <div className={styles.containerDetail}>
    <div className={styles.imageContainer}>
      <img src={producto.image} alt={producto.title} width="200" height="200" />
    </div>
      <div className={styles.detailsContainer}>
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        <p> $ {producto.price}</p>
        <p>{producto.category}</p>
        <button className={styles.button} onClick={() => {
        addProduct(producto, 1);
        toast.success("Producto agregado al carrito");
        }}>Agregar al carrito</button>
          <ToastContainer />
      </div>
  </div>
  );
};

export default CardDetail;
