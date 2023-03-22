const ProductList = ({ productos }) => {
    console.log(productos)
  return (
    <div>
      {productos.map((producto) => (
        <h3 key={producto.id}>{producto.title}</h3>
      ))}
    </div>
  );
};

export default ProductList;
