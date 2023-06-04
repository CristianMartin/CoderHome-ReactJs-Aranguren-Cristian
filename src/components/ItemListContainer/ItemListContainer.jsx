import React from 'react'
import './ItemListContainer.css'
import ImgProduct from '../../assets/Notebook-Gamer-Asus-TUF-FX516-1.jpg'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container d-flex justify-content-center mt-4">
        <div className="card card-size text-center p-2">
            <img className="card-img-top" src={ ImgProduct } alt={`imagen - ${greeting}`}/>
            <div className="card-body">
                <h5 className="card-title">{ greeting }</h5>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
  )
}

export default ItemListContainer