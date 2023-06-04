import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img
              className="logo-coderhome"
              src="/contao-logo.png"
              alt="logo_coderhome"
            />
          </a>
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
                <a className="nav-link" href="index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://mercadolibre.com.ar" target="_blank">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://nvidia.com" target="_blank">Sponsors</a>
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