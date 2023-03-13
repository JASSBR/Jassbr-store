import React from 'react'
import './Products.scss';
import List from '../../Components/List/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { makeRequest } from '../../makeRequest';

const Products = () => {
const catId = parseInt(useParams().id);
const [maxPrice,setMaxPrice] = useState(1000);
const [sort,setSort] = useState(null);
const [selectedSubCats,setSelectedSubCats] = useState([]);

const {data,loading,error} = useFetch(`/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`);
const res =  makeRequest.get(`/categories/${catId}?populate=*`);


console.log(res);
const priceChange = (e) => {
    setMaxPrice(e.target.value);
}

const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(isChecked 
        ?[...selectedSubCats,value]
        :selectedSubCats.filter((item) => item !== value)
        );
}

  return (
    <div className='products'>
        <div className="left">
            <div className="filterItem">
            <h3>Product Categories</h3>
            {data?.map(item=>(

            <div className="inputItem" key={item.id}>
                <input type="checkbox" name={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>

            ))}
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
                <img  className="cover" src={'http://localhost:1337/uploads/102556_5de59f4dfc.jpg'} alt="" />
                <List maxPrice={maxPrice} sort={sort || null} catId={catId} selectedSubCats={selectedSubCats}/>
        </div>
    </div>
  )
}

export default Products