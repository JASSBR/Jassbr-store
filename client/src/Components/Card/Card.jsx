import React from 'react'
import './Card.scss';
import { Link } from "react-router-dom"


function Card({product}) {
  return (
    <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'#000'}}>
    <div className='card' >
        <div className="image">
        <img  src={process.env.REACT_APP_UPLOAD_URL + product?.attributes.image.data.attributes.url} alt="" className='mainImage' />
        <img  src={process.env.REACT_APP_UPLOAD_URL + product?.attributes.img2.data.attributes.url} alt=""  className='secondImage' />
        {product?.attributes.isNew && <span className='new'>New Arrival</span>}

        </div>
         <span className='title'>{product?.attributes.title}</span>
         <div className="prices">
         <span className='oldPrice'>$ {product?.attributes.oldPrice ? product?.attributes.oldPrice : product?.attributes.price +20}</span>

         <span className='newPrice'>$ {product?.attributes.price}</span>
         </div>
    </div>
    </Link>
  )
}

export default Card