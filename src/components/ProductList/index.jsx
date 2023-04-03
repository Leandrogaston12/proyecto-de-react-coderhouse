import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./productList.module.scss";

const ProductList = () => {
    const [productos, setProductos] = useState([])
        const {categoryName} = useParams();
        console.log(categoryName);
        const getProductos = async () => {
            
                if(!!categoryName){
                    const response = await fetch(`https://fakestoreapi.com/products`)
                    const data = await response.json();
                    setProductos(data.filter((producto)=>(producto.category === categoryName)));

                }
                else{
                    const response = await fetch(`https://fakestoreapi.com/products`)
                    const data = await response.json();
                    setProductos(data);  
                }
          }
          console.log(productos);
          useEffect(() => {
            getProductos();
          }, [categoryName]);

    
  return (
    <div className={styles.grid}>
      {productos.map((producto) => (
         <Link to={`/products/${producto.id}`}>
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
