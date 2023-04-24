import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./cardDetail.module.scss";
import db from "../../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const CardDetail = () => {
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
    return <h2>loading...</h2>
  }

  

  return (
    <div className={styles.containerDetail}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" height="200" />
      <p>{producto.description}</p>
      <p> $ {producto.price}</p>
      <p>{producto.category}</p>
    </div>
  );
};

export default CardDetail;
