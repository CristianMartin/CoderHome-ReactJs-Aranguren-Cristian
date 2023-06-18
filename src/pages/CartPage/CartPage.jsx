import React from "react";
import "./CartPage.css";

const CartPage = () => {
  return (
    <>
      <h2 className="text-bg-dark bg-gradient text-center text-uppercase p-4">
        Carro de compras
      </h2>
      <div className="container mt-4 mb-5">
        <div id="bodyCarrito" class="row">
          <h2 class="text-secondary text-opacity-75 text-center">
            ¡Tu carrito está vacío!
          </h2>
        </div>
      </div>
    </>
  );
};

export default CartPage;
