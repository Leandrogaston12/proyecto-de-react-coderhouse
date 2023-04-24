import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./productList.module.scss";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config.js";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { categoryName } = useParams();
  
  const productsRef = collection(db, "items");

  const getProductos = async () => {
    const itemsCollection = await getDocs(productsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    categoryName
      ? setProductos(
          items.filter((product) => product.category == categoryName)
        )
      : setProductos(items);
  };
  console.log(productos);
  useEffect(() => {
    getProductos();
  }, [categoryName]);

  return (
    <div className={styles.grid}>
      {productos.map((producto) => (
        <Link key={producto.id} to={`/products/${producto.id}`}>
          <div className={styles.container}>
            <img className={styles.imagenes} src={producto.image} />
            <h3 className={styles.ajusteContenido}>{producto.title}</h3>
            <p> $ {producto.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
