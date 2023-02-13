import React from 'react'
import './Card.scss';
import { Link } from "react-router-dom"


function Card({product}) {
  return (
    <Link to={`/products/${product.id}`} style={{textDecoration:'none',color:'#000'}}>
    <div className='card' >
        <div className="image">
        <img  src={product.image} alt="" className='mainImage' />
        <img  src={product.secondImg} alt=""  className='secondImage' />
        {product.isNew && <span className='new'>New Arrival</span>}

        </div>
         <span className='title'>{product.title}</span>
         <div className="prices">
         <span className='oldPrice'>$ {product.old_price}</span>

         <span className='newPrice'>$ {product.new_price}</span>
         </div>
    </div>
    </Link>
  )
}

export default Card