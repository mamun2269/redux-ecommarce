import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";


import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.ProductReducer );

    useEffect(() => {
        dispatch({
            type: 'PRODUCT',
            id: id,
        })
    }, [id])


    // perform inc dec items
    const [quantity, setQuantity]= useState(1);
    const decQuantity=()=>{
      if(quantity>1){
        setQuantity(quantity-1);
      }
    }

  return (
    <>
        <div className="details_section paTB">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img className='product_img' src={`/images/${product.image}`} alt="" />
              </div>
              <div className="col-md-6">
                <div className="product_info">
                    <h3 className="p_name">{product.name}</h3>
                    <p>{product.desc}</p>
                    <div className="p_price">
                        <span className="product_price"><p>Price:</p> ${product.price}</span>
                        <span className='del_price'><del>${product.delprice}</del></span>
                    </div>

                    <div className="update_quantity">
                      <span className="inc_quan" onClick={()=> setQuantity(quantity+1)}><FiPlus/></span>
                      <span className="quantity">{quantity}</span>
                      <span className="dec_quan" onClick={decQuantity}><FiMinus/></span>
                    </div>
                    

                    {/* add to cart  */}
                    <button className="cart_btn"
                      onClick={()=> dispatch({
                        type: "ADD_TO_CART",
                        payload: { product, quantity },
                      })}
                    >Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Details;