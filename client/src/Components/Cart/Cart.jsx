import React from 'react'
import './Cart.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from "../../makeRequest";

import {loadStripe} from '@stripe/stripe-js';

function Cart() {
    const products = useSelector((state)=> state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0
        products.forEach((product) => {total += product.quantity * product.price}) 
        return total.toFixed(2)
    };
    const stripePromise = loadStripe('pk_test_51Ml71PGJ2Z7vsfwQpJB2WK6K0sKuuPHGrHyccNtcuE11y0bqyRTmlgiki3wO5BpUVIGV9G2h4RyzWUYt7RherZs700aQCwHo9O');
       const handlePayment = async () =>{
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders',{
                products,
            });
            await stripe.redirectToCheckout({
                sessionId:res.data.stripeSession.id,
            })
        } catch (error) {
            
        }
       }
    
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map((product) =>
        <div className="item">
            <img src={process.env.REACT_APP_UPLOAD_URL + product.img} alt="" />
            <div className="info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className='price'>{product.quantity} x  $ {product.price}</span>
            </div>
            <span className='delete' onClick={()=>dispatch(removeItem(product.id))}><DeleteOutlineOutlinedIcon/></span>
        </div>
            )}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$ {totalPrice()}</span>
        </div>
        <button className="process" onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart