import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'


const CartWidget = () =>  {
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

export default CartWidget