import React from 'react'
import Card from '../Card/Card';
import './List.scss';



const List = () => {

    const products =[
        {
            'id': 1,
            'title':'sweat',
            'isNew': true,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            'id': 2,
            'title':'sweat',
            'isNew': false,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            'id': 3,
            'title':'sweat',
            'isNew': false,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            'id': 4,
            'title':'sweat',
            'isNew': true,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }
    ];

  return (
    <div className='List'>
        {products?.map(product => (
            <Card product={product} key={product.id}/>
        ))}
    </div>
  )
}

export default List