import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { Link } from 'react-router-dom';
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import PageTop from '../PageTop/PageTop';
import { useSelector } from 'react-redux';

const JensItem = () => {
  const { items }= useSelector((state) => state.JensItemReducer);
  const[ data, setData]= useState(items);

  // filter item
  const filterItem=(catItem)=>{
      const updateItem= items.filter((curElem)=>{
        return curElem.category === catItem;
      });
      setData( updateItem);
  }

  // load more item
  const[ visiable, setVisiable]= useState(6);
  const slice= data.slice( 0, visiable);
  const loadMore=()=>{
    setVisiable(  visiable + visiable);
}

  return (
    <>
        <PageTop title="JensItem"/>

        <div className="ladies_section lj_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="category_area">
                            <h5 className="cat_title"><BsFilterLeft  className="cat_icon"/> Category</h5>
                            <Link to='' className="cat_btn" onClick={() => filterItem('shirt') }>Shirt</Link>
                            <Link to='' className="cat_btn" onClick={() => filterItem('tshirt') }>T-Shirt</Link>
                            <Link to='' className="cat_btn" onClick={() => filterItem('shoes') }>Shoes</Link>
                            <Link to='' className="cat_btn"  onClick={() => filterItem('pant') }>Pant</Link>
                            <Link to='' className="cat_btn"  onClick={() => filterItem('bag') }>Bages</Link>
                            <Link to='' className="cat_btn"  onClick={() => filterItem('jacket') }>Jackets</Link>
                            <Link to='' className="cat_btn"  onClick={() => filterItem('accessories') }>Accessories</Link>
                        </ul>

                        <ul className="category_area">
                            <h5 className="cat_title"><BsFilterLeft  className="cat_icon"/> BRANDS</h5>
                            <Link to='' className="cat_btn btN">Gucci </Link>
                            <Link to='' className="cat_btn btN">Burberry </Link>
                            <Link to='' className="cat_btn btN">Valentino </Link>
                            <Link to='' className="cat_btn btN">Hogan </Link>
                            <Link to='' className="cat_btn btN"> Givenchy </Link>
                            <Link to='' className="cat_btn btN"> Moreschi </Link>
                        </ul>
                    </div>

                    
                    <div className="col-md-9">
                        <div className="row gy-3">
                        {
                            slice.map((item)=>{
                                return(
                                    <>
                                        <div className="col-md-4" key={item.id}>
                                            <div className="product_item">
                                                <div className="product_overflow">
                                                    <Tippy  content="Quick view">
                                                        <Link to='' className="ovelay_btn"><AiOutlineEye/></Link>
                                                    </Tippy>
                                                    <Tippy  content="Add to cart">
                                                    <Link to='' className="ovelay_btn"><FaShoppingCart/></Link>
                                                    </Tippy>
                                                </div>
                                                <div className="product_frame">
                                                    <img className="img-fluid" src={item.image} alt="product img" />
                                                </div>
                                                <div className="product_details text-center">
                                                    <h3 className="product_name">{ item.name }</h3>
                                                    <div className="price">
                                                        <span className="product_price">$ {item.price}</span>
                                                        <span className='del_price'><del>$ {item.delprice}</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        <button className='load_btn' onClick={()=> loadMore() }>Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JensItem;