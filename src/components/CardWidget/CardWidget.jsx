import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CardWidget.css'


const CardWidget = () =>  {
  return (
    <>
      <div class="carrito">
        <a id="verCarrito" class="nav-link" href="https://www.mercadolibre.com.ar/" target='_blank'>
          <ShoppingCartIcon />
          <p>10</p>
        </a>
      </div>
    </>
  )
}

export default CardWidget