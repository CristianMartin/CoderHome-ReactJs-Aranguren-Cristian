import React, { useEffect, useState } from "react";
import CardProducto from "../../components/CardProducto/CardProducto";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [productos, setProductos] = useState([]);
  let { categoryId } = useParams();

  let filteredProducts =
    categoryId === "Todas"
      ? productos
      : productos.filter((producto) => {
          return producto.categoria === categoryId;
        });

  useEffect(() => {
    fetch(`../${import.meta.env.VITE_BASE_URL}`)
      .then((response) => response.json())
      .then((productos) => {
        setProductos(productos);
      });
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div id="bodyProductos" className="row">
        {filteredProducts.map((producto) => {
          return (
            <div className="col-md-4 mt-4 mb-4" key={producto.id}>
              <CardProducto producto={producto} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
