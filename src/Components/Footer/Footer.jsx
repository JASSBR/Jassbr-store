import React from 'react'
import './Footer.scss';

function Footer() {
    const today = new Date();
    const date = today.getFullYear();
  return (
    <div className='footer'>
        <div className="top">
        <div className="classes">
            <h3 className="title">Categories</h3>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Children</a>
            <a href="">Accessories</a>
            <a href="">New Arrivals</a>
        </div>
        <div className="classes">
            <h3 className="title">Links</h3>
            <a href="">FAQ</a>
            <a href="">Pages</a>
            <a href="">Stores</a>
            <a href="">Compare</a>
            <a href="">Cookies</a>
        </div>
        <div className="classes">
            <h3 className="title">About</h3>
            <p>Lorem ipsum dolor sit amet consecteturrem ips. Repellat quaerat eligendi delectus fug adipisicitempora fugit</p>
        </div>
        <div className="classes">
            <h3 className="title">Contact</h3>
            <p>Loa nihil enim non at labore, vel doloribus, eos quibusdam distinctio reprehenderit nam. Modi deleniti soluta ea aliquam?</p>
        </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span>JASSBRSTORE </span>  © Copyright {date} - All rights reserved
            </div>
            <div className="right">
                <img src="/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer