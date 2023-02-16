import React from 'react'
import './Cart.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Cart() {
    const products =[
        {
            'id': 1,
            'title':'sweat',
            'isNew': true,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            'id': 2,
            'title':'sweat',
            'isNew': false,
            'old_price':18,
            'new_price':16,
            'description':'sweat for cold skin',
            'image':'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            'secondImg':'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }
    ];
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map((product) =>
        <div className="item">
            <img src={product.image} alt="" />
            <div className="info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className='price'>1 x  $ {product.new_price}</span>
            </div>
            <span className='delete'><DeleteOutlineOutlinedIcon/></span>
        </div>
            )}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$ 19.9</span>
        </div>
        <button className="process">PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart