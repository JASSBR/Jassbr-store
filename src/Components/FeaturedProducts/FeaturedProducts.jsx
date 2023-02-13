import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss';

function FeaturedProducts({type}) {

    const products =[
        {
            'id': 1,
            'title':'sweat',
            'isNew': true,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://i.dummyjson.com/data/products/1/2.jpg',
            'secondImg':'https://i.dummyjson.com/data/products/2/1.jpg'
        },
        {
            'id': 2,
            'title':'sweat',
            'isNew': false,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://i.dummyjson.com/data/products/1/2.jpg',
            'secondImg':'https://i.dummyjson.com/data/products/2/1.jpg'
        },
        {
            'id': 3,
            'title':'sweat',
            'isNew': false,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://i.dummyjson.com/data/products/1/2.jpg',
            'secondImg':'https://i.dummyjson.com/data/products/2/1.jpg'
        },
        {
            'id': 4,
            'title':'sweat',
            'isNew': true,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://i.dummyjson.com/data/products/1/2.jpg',
            'secondImg':'https://i.dummyjson.com/data/products/2/1.jpg'
        }
    ]

  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perspiciatis autem ducimus, animi, recusandae veniam iure rerum vitae laborum possimus expedita quis vel maxime ullam numquam temporibus natus iusto d</p>
        </div>
        <div className="bottom">   
            {products.map(product => (<Card product={product} key={product.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedProducts