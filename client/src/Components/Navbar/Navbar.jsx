import React,{ useState } from 'react'
import './Navbar.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

function Navbar() {
  const [open,setOpen] = useState(false);
  const products = useSelector((state)=> state.cart.products);

  return (
    <div className='Navbar'>
        <div className="left">
        <a href={process.env.BASE_URL}><ArrowDownwardIcon/>
        <img src="/en.png" alt="image" /></a>
        <a href={process.env.BASE_URL}>USD <ArrowDownwardIcon/></a>
        <a href={process.env.BASE_URL}>Women</a>
        <a href={process.env.BASE_URL}>Men</a>
        <a href={process.env.BASE_URL}>Children</a>

        </div>
        <div className="center">
            <span>JASSBR-STORE</span>
        </div>
        <div className="right">
            <a href='http://localhost:3000'>HomePage</a>
            <a href={process.env.BASE_URL}>About</a>
            <a href={process.env.BASE_URL}>Contact</a>
            <a href={process.env.BASE_URL}>Stores</a>
            <a href={process.env.BASE_URL}><SearchIcon/></a>
            <a href={process.env.BASE_URL}><PersonIcon/></a>
            <a href={process.env.BASE_URL}><FavoriteBorderIcon/></a>
            <a href="#" className='pannier' onClick={()=>setOpen(!open)}><ShoppingCartOutlinedIcon/><span>{products.length}</span></a>
        </div>
        {open && <Cart/>}
    </div>

  )
}

export default Navbar