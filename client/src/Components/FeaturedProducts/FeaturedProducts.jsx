import React from 'react'
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';


function FeaturedProducts({type}) {



    const {data,loading,error} = useFetch(`/Products?populate=*&[filters][type][$eq]=${type}`);



  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>
The "Featured Products" section in a store app typically highlights a curated selection of products that are considered to be notable, popular, or currently promoted by the store. Here's a description of what this section usually entails:

Featured Products

The "Featured Products" section showcases a handpicked assortment of items carefully selected to capture the essence of our store's offerings. </p>
        </div>
        <div className="bottom">   
            {error ? "Something went wrong" :(loading ? 'Loading' : data?.map(product => <Card product={product} key={product.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedProducts