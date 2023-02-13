import React from 'react'
import { Link } from 'react-router-dom';
import './Categories.scss';

function Categories() {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>
            </div>
            <div className="row">
            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>
                        </div>
        </div>
        <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>       
                    </div>
                </div>

            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1614893090450-6d4b8406ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <button>
                <Link to="/products/1" style={{textDecoration:'none',color:'#000'}}>Shoes</Link>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Categories