import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'

const NavBar = () => {
  return (
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img
              class="logo-coderhome"
              src="/contao-logo.png"
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
            <MenuIcon />
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
              <li>
                <CardWidget/>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default NavBar