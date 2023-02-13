import React from 'react'
import Card from '../Card/Card';
import './Products.scss';

const Products = () => {

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
    ];

  return (
    <div className='products'>
        <div className="left">
            <h3>Product Categories</h3>
            <select>
                <option value="hat">hat</option>
                <option value="tshirt">tshirt</option>
            </select>
            <h3>Filter by price</h3>
            <input type="range" name="price" id="price" minLength={0} maxLength={100} />
            <h3>Sort by</h3>
            <div className="radio">
            <input type="radio" value="Lowest" name="order" /> Price(Lowest first)
            <input type="radio" value="Highest" name="order" /> Price(Highest first)
            </div>
        </div>
        <div className="right">
            <div className="cover">
                <img src="https://images.unsplash.com/photo-1614893090450-6d4b8406ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
            </div>
            <div className="listProducts">
            {products.map(product => (<Card product={product} key={product.id}/>))}
            </div>
        </div>
    </div>
  )
}

export default Products