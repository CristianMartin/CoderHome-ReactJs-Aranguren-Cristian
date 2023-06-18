import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <div className="carrito">
        <Link className="nav-link d-flex" to="/cart">
          <ShoppingCartIcon />
          <p>10</p>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
