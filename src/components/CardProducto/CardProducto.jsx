import React from "react";
import "./CardProducto.css";

const CardProducto = ({ producto }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="card-img-actions">
          <div
            id={producto.id}
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={producto.imagenes[0]}
                  alt={`imagen - ${producto.nombre} - 1`}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={producto.imagenes[1]}
                  alt={`imagen - ${producto.nombre} - 2`}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              data-bs-target={`#${producto.id}`}
              type="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              data-bs-target={`#${producto.id}`}
              type="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="card-body bg-light text-center">
        <div className="mb-2">
          <h6 className="font-weight-semibold mb-2">
            <a href="./pages/hoja-producto.html" className="text-info mb-2">
              {producto.nombre}
            </a>
          </h6>
        </div>
        <h3 className="mb-0 font-weight-semibold">{producto.precio}</h3>
        <div className="text-muted mb-3">{producto.reviews} reviews</div>
        <div
          id={`botonera-producto-${producto.id}`}
          className="d-flex flex-row justify-content-center"
        ></div>
      </div>
    </div>
  );
};

export default CardProducto;
