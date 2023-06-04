import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img
              class="logo-coderhome"
              src="./public/contao-logo.png"
              alt="logo_coderhome"
            />
          </a>
          <button
            class="navbar-toggler boton-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#opciones"
            aria-controls="opciones"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="opciones"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://mercadolibre.com.ar" target="_blank">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://nvidia.com" target="_blank">Sponsors</a>
              </li>
            </ul>
            <div class="carrito">
              <a id="verCarrito" class="nav-link" href="./pages/carrito.html">
                <i class="bi bi-cart-dash-fill text-white icon-size"></i>
              </a>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar