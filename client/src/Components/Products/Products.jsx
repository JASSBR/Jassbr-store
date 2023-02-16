import React from 'react'
import Card from '../Card/Card';
import './Products.scss';
import List from '../List/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Products = () => {
const catId = parseInt(useParams().id);
const [maxPrice,setMaxPrice] = useState(1000);
const [sort,setSort] = useState(null);


const priceChange = (e) => {
    setMaxPrice(e.target.value);
}


  return (
    <div className='products'>
        <div className="left">
            <div className="filterItem">
            <h3>Product Categories</h3>
            <div className="inputItem">
                <input type="checkbox" name="1" value={1} />
                <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" name="2" value={2} />
                <label htmlFor="2">Skirts</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" name="3" value={3} />
                <label htmlFor="3">coats</label>
            </div>
            </div>
            <div className="filterItem">
            <h3>Filter by price</h3>
            <div className="range">

            <span>0</span>
            <input type="range" name="price" id="price" onChange={priceChange} min={0} max={1000} />
            <span>{maxPrice}</span>
            </div>
            </div>
            <div className="filterItem">
            <h3>Sort by</h3>
            <div className="inputItem">
            <input type="radio" id="asc" onChange={(e) => {setSort("asc")}} value='asc' name="price" /> 
            <label htmlFor="asc">Price(Lowest first)</label>
            </div>
            <div className="inputItem">
            <input type="radio" value='desc' id="desc" onChange={(e) => {setSort("desc")}} name="price" /> 
            <label htmlFor="desc">Price(Highest first)</label>
            </div>
            </div>

        </div>
        <div className="right">
                <img  className="cover" src="https://images.unsplash.com/photo-1614893090450-6d4b8406ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <List maxPrice={maxPrice} sort={sort}/>
        </div>
    </div>
  )
}

export default Products