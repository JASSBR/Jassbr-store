import React from 'react'
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';



const List = ({catId,selectedSubCats,sort,maxPrice}) => {

const {data,loading,error} = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCats?.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&${ sort != null ? `[sort]=price:${sort}`: ''}`);


  return (
     <div className='List'>
        {loading ? 'Loading' : data?.map(product => (
             <Card product={product} key={product.id}/>
       ))}
     </div>
  )
}

export default List