import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import axios from 'axios';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';


function FeaturedProducts({type}) {



    const {data,loading,error} = useFetch(`/Products?populate=*&[filters][type][$eq]=${type}`);



  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perspiciatis autem ducimus, animi, recusandae veniam iure rerum vitae laborum possimus expedita quis vel maxime ullam numquam temporibus natus iusto d</p>
        </div>
        <div className="bottom">   
            {error ? "Something went wrong" :(loading ? 'Loading' : data?.map(product => (<Card product={product} key={product.id}/>)))}
        </div>
    </div>
  )
}

export default FeaturedProducts