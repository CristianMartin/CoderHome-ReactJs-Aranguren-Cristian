import React, { useEffect, useState } from "react";
import "./ProductoListContainer.css";
import CardProducto from "../CardProducto/CardProducto";

const ProductoListContainer = () => {
  const [productos, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}`)
      .then((response) => response.json())
      .then((productos) => {
        setItems(productos);
      });
  }, []);

  return (
    <>
      <h2 className="text-bg-dark bg-gradient text-center text-uppercase p-4">
        Nuestros productos
      </h2>
      <div className="container d-flex justify-content-center mt-4">
        <div id="bodyProductos" className="row">
          {productos.map((producto) => {
            return (
              <div className="col-md-4 mt-4" key={producto.id}>
                <CardProducto producto={producto} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductoListContainer;
