import React, { useState } from 'react'
import './Product.scss';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = () => {
    const images =[

            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'

    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
  return (
    <div className='product'>
        <div className="left">
            <div className="choiceImg">
                <img src={images[0]} alt="" onClick={e=>setCurrentImage(0)}/>
                <img src={images[1]} alt="" onClick={e=>setCurrentImage(1)}/>
            </div>
            <div className="shownImg">
                <img src={images[currentImage]} alt="" />
            </div>
        </div>
        <div className="right">
        <h1>Title</h1>
        <span className='price'> $ 19.9 </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum doloribus explicabo, nostrum voluptas sit a, vel optio quod nulla molestias exercitationem dolorem deserunt officiis aliquam? Ullam saepe molestias amet?</p>
        <div className="quantity">
        <button onClick={()=> setQuantity((prev)=> (prev === 1 ? 1 : prev -1 ))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=> setQuantity((prev)=> prev +1 )}>+</button>
        </div>
        <button className='add'><LocalGroceryStoreOutlinedIcon/> ADD TO CART</button>
        <div className="actions">
        <span className='action'><FavoriteBorderOutlinedIcon/> ADD TO WISH LIST</span>
        <span className='action'><BalanceOutlinedIcon/> ADD TO COMPARE</span>
        </div>
        <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-shirt,Women,Top</span>
        </div>

        <div className="liens">
            <a href="#" target="_blank" rel="noopener noreferrer">DESCRIPTION</a>
            <a href="#" target="_blank" rel="noopener noreferrer">ADDITIONAL INFORMATION</a>
            <a href="#" target="_blank" rel="noopener noreferrer">FAQ</a>
        </div>
        </div>
    </div>
  )
}

export default Product