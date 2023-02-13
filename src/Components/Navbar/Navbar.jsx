import React from 'react'
import './Navbar.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="left">
        <a href="https://intranet.dekra-automotive.ma"><ArrowDownwardIcon/>
        <img src="/en.png" alt="image" /></a>
        <a href="https://intranet.dekra-automotive.ma">USD <ArrowDownwardIcon/></a>
        <a href="https://intranet.dekra-automotive.ma">Women</a>
        <a href="https://intranet.dekra-automotive.ma">Men</a>
        <a href="https://intranet.dekra-automotive.ma">Children</a>

        </div>
        <div className="center">
            <span>JASSBR-STORE</span>
        </div>
        <div className="right">
            <a href="https://intranet.dekra-automotive.ma">HomePage</a>
            <a href="https://intranet.dekra-automotive.ma">About</a>
            <a href="https://intranet.dekra-automotive.ma">Contact</a>
            <a href="https://intranet.dekra-automotive.ma">Stores</a>
            <a href="https://intranet.dekra-automotive.ma"><SearchIcon/></a>
            <a href="https://intranet.dekra-automotive.ma"><PersonIcon/></a>
            <a href="https://intranet.dekra-automotive.ma"><FavoriteBorderIcon/></a>
            <a href="https://intranet.dekra-automotive.ma" className='cart'><ShoppingCartOutlinedIcon/><span>0</span></a>
        </div>
    </div>
  )
}

export default Navbar