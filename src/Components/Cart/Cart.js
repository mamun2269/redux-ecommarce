import React from 'react';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const{ products,totalQuantity, totalPrice }= useSelector((state) => state.CartReducer);
  const dispatch= useDispatch();
  return (
    <>
      <div className="cart_secton">
        <div className="container">
        <h5>Your Cart</h5>
        {
          products.length > 0 ? <>
            <div className="row text-center">
              <div className="col-md-9">
                <div className="cart_heading mb-2">
                  <div className="row">
                    <div className="col-2">Item</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc / Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {
                  products.map((product) => {
                    return(
                      <div className="row align-items-center my-3" key={product.id}>
                      <div className="col-2">
                        <img className="cart__image" src={`/images/${product.image}`} alt=""/>
                         </div>
                         <div className="col-2">
                             <h3 className="product_name">{product.name}</h3>
                         </div>
                         <div className="col-2">
                            <span>$ {product.price}</span>
                         </div>
                         <div className="col-2">
                            <div className="update_quantity inc_dec">
                                <span className="inc_quan" onClick={()=>dispatch({type:'INC', payload:product.id, })}><FiPlus/></span>
                                <span className="quantity">{ product.quantity}</span>
                                <span className="dec_quan" onClick={()=> dispatch({type:'DEC', payload:product.id, })}><FiMinus/></span>
                            </div>
                         </div>
                         <div className="col-2">
                            <span>$ {product.price * product.quantity}</span>
                         </div>
                         <div className="col-2">
                            <span className="delete_icon" onClick={()=> dispatch({ type:'REMOVE', payload:product.id, })}> <AiTwotoneDelete/> </span>
                         </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="col-md-3">
                <span className="summary_head">Summary</span>

                <div className="samary_area">
                    <div className="summary_details mb-4">
                        <div className="row my-1">
                          <div className="col-md-6 text-left">
                            <span>Total Quantity</span>
                          </div>
                          <div className="col-md-6 text-right"><span>{totalQuantity}</span></div>
                        </div>
                        <div className="row my-1">
                          <div className="col-md-6 text-left">
                            <span>Totao Price</span>
                          </div>
                          <div className="col-md-6 text-right"><span>${totalPrice}</span></div>
                        </div>
                    </div>

                    <button className="checkout_btn">checkout</button>
                </div>


              </div>
            </div>

          </> : 'Ops! Cart is empty'
        }
        </div>
      </div>
    </>
  )
}

export default Cart;