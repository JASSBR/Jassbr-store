import React from 'react'
import { Link } from 'react-router-dom';
import './Categories.scss';

function Categories() {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
            <img src="https://dfcdn.defacto.com.tr/Mobile/man_ramadan_desktop_b4af3844-f6a9-4bd6-88a8-023fefe00c3b_7b7c3555-fd90-44f2-8b78-62b47e95d0cd_DI_316.jpg" alt="" />
            <button>
                <Link to="/products/2" style={{textDecoration:'none',color:'#000'}}>Men</Link>
            </button>
            </div>
            
        </div>
        <div className="col">
        <div className="row">
            <img src="https://dfcdn.defacto.com.tr/Mobile/woman_ramadan_desktop_9ec3bd74-ba2b-4c2c-b9de-42d2c27f96e3_ee256ce8-90a5-4502-92cd-9b52cf83a83c_DI_316.jpg" alt="" />
            <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Women</Link>
            </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://dfcdn.defacto.com.tr/Mobile/kids_ramadan_desktop_a8f0abb7-7e28-4453-8a69-705e68d2178a_33b0d4ba-9eac-44e2-9435-1e777f8c1c47_DI_316.jpg" alt="" />
                    <button>
                <Link to="/products/3" style={{textDecoration:'none',color:'#000'}}>Kids & Baby</Link>
            </button>
                    </div>
                </div>
                

            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Accessories</Link>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Categories