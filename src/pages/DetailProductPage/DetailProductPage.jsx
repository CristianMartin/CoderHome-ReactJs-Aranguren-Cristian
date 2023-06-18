import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailProductPage.css";

const DetailProductPage = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`../../${import.meta.env.VITE_BASE_URL}`)
      .then((response) => response.json())
      .then((productos) => {
        let result = productos.filter((producto) => {
          return producto.id == id;
        });
        setProducto(result[0]);
      });
  }, []);

  return (
    <>
      {producto.id ? (
        <div className="container mt-5 mb-5">
          <div className="card p-4">
            <div className="card-body">
              <div className="d-flex flex-column mt-4 mb-5">
                <h1 className="text-dark">{producto.nombre}</h1>
                <div
                  id="hoja-producto-carousel"
                  className="carousel slide card-img-actions mt-4 align-self-center carrousel-w"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={`../../../src/assets/${producto.imagenes[0]}`}
                        className="d-block w-100"
                        alt={`${producto.nombre}-1`}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`../../../src/assets/${producto.imagenes[1]}`}
                        className="d-block w-100"
                        alt={`${producto.nombre}-2`}
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#hoja-producto-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#hoja-producto-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="d-flex">
                  <h3 className="mb-3 me-3">{`$${producto.precio}`}</h3>
                </div>

                <div className="d-flex mb-3">
                  <i className="bi bi-truck text-success fs-4 me-2"></i>
                  <span className="text-success fw-bold mt-1">
                    Envio gratis
                  </span>
                </div>
                <div className="d-flex mb-4">
                  <i className="bi bi-heart text-primary fs-4 ms-2"></i>
                  <i className="bi bi-share text-primary fs-4 ms-4"></i>
                </div>
                <div className="text-muted mb-2">{`${producto.reviews} reviews`}</div>
                <a
                  type="button"
                  className="btn text-light align-self-center pl-4 pr-4 button-w"
                >
                  Comprar ahora
                </a>

                <hr className="w-100 mt-5 mb-5" />
                <div className="lead fs-6 mt-2 pr-3">
                  <h3 className="mb-4">Descripción</h3>
                  {producto.descripcion}
                </div>
                <hr className="w-100 mt-5" />
                <h3 className="mb-4 mt-4">Preguntas y respuestas</h3>
                <div className="d-flex lead fs-6 mt-2">
                  <div className="d-flex flex-column preguntas-w">
                    <input
                      className="p-2 rounded-2 me-4"
                      type="text"
                      name="pregunta"
                      id="pregunta"
                      placeholder="Escribí tu pregunta..."
                    />
                    <span className="mt-5 align-self-center text-muted">
                      *No hay preguntas*
                    </span>
                  </div>
                  <a
                    type="button"
                    className="btn text-light p-2 button-w  h-50"
                  >
                    Preguntar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailProductPage;
