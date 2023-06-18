import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo-coderhome"
            src="/contao-logo.png"
            alt="logo_coderhome"
          />
        </Link>
        <button
          className="navbar-toggler boton-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#opciones"
          aria-controls="opciones"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="opciones"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#bodyProductos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#sponsors">
                Sponsors
              </a>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
