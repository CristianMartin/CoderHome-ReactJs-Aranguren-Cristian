import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CardWidget.css'


const CardWidget = () =>  {
  return (
    <>
      <div className="carrito">
        <a id="verCarrito" className="nav-link d-flex" href="https://www.mercadolibre.com.ar/" target='_blank'>
          <ShoppingCartIcon />
          <p>10</p>
        </a>
      </div>
    </>
  )
}

export default CardWidget