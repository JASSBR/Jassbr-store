import React, { useState } from 'react'
import './Product.scss';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = parseInt(useParams().id);
    const {data,loading,error} = useFetch(`/products/${id}?populate=*`);
        

    const [currentImage, setCurrentImage] = useState('image');
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
  return (
    <div className='product'>
        {loading ? "Loading..." : 
        (
        <><div className="left">
            <div className="choiceImg">
                 <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} alt="" onClick={e=>setCurrentImage('image')}/>
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setCurrentImage('img2')}/> 
            </div>
            <div className="shownImg">
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[currentImage]?.data?.attributes?.url} alt="" />
            </div>
        </div>
        <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'> $ {data?.attributes?.price} </span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
        <button onClick={()=> setQuantity((prev)=> (prev === 1 ? 1 : prev -1 ))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=> setQuantity((prev)=> prev +1 )}>+</button>
        </div>
        <button className='add' onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.image?.data?.attributes?.url,
                    quantity,
                  })
                )
              }><LocalGroceryStoreOutlinedIcon/> ADD TO CART</button>
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
        </>)
        }
    </div>
  )
}

export default Product