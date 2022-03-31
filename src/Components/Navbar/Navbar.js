import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const{ totalQuantity}= useSelector((state)=> state.CartReducer)
  return (
    <>
        <div className="navbar_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar_wrapp">
                            <Link to="/" className="logo">Shop<span>BD</span>  </Link>

                            <div className="nav_right">
                                <ul className="main_nav">
                                    <li><Link to='' className='nav_link'>Home</Link></li>
                                    <li><Link to='/about' className='nav_link'>About</Link></li>
                                    <li><Link to='/portfolio' className='nav_link'>Portfolio</Link></li>
                                    <li><Link to='/ladies' className='nav_link'>LadiesItem</Link></li>
                                    <li><Link to='/jens' className='nav_link'>JensItem</Link></li>
                                    <li><Link to='' className='nav_link'>Contact</Link></li>
                                </ul>
                                
                                <div className="account_area">
                                    <Link to='/login' className='log_in'>Log In</Link>
                                    <div className="basket">
                                        <Link to='/cart'>
                                            <FaShoppingCart className='cart_icon'/>
                                            <span className="cart_quantity">{totalQuantity}</span>
                                        </Link>    
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;