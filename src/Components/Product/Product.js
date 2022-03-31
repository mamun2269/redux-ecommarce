import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { AiOutlineEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";


import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
    const {products}= useSelector((state) =>state.ProductReducer);
  return (
    <>
        <div className="product_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section_top">
                            <span className="section_title">TRENDING</span>
                            <p className="section_heading">Top view in this week</p>
                        </div>
                    </div>
                </div>


                <div className="row gy-3">
                {
                    products.map((element) =>{
                        return(
                            <div className="col-md-3" key={element.id}>
                                <div className="product_item">
                                    <div className="product_overflow">
                                        <Tippy  content="Quick view">
                                            <Link to={`/details/${element.id}`} className="ovelay_btn"><AiOutlineEye/></Link>
                                        </Tippy>
                                        <Tippy  content="Add to cart">
                                        <Link to=''  className="ovelay_btn"><FaShoppingCart/></Link>
                                        </Tippy>
                                    </div>
                                    <div className="product_frame">
                                        <img className="img-fluid" src={`/images/${element.image}`} alt="product img" />
                                    </div>
                                    <div className="product_details text-center">
                                        <h3 className="product_name">{element.name}</h3>
                                        <div className="price">
                                            <span className="product_price">${element.price}</span>
                                            <span className='del_price'><del>${element.delprice}</del></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    </>
  )
}

export default Product;