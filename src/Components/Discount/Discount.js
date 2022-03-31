import React from 'react';
import img1 from '../../images/discount_1.webp';
import img2 from '../../images/discount_2.webp';



const Discount = () => {
  return (
    <>
        <div className="discount_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="dis_left dis_area">
                            <div className="dis_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="dis_conten">
                                <h3>Look Book 2022</h3>
                                <p>Make love tis love</p>
                            </div>    
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dis_right dis_area">
                            <div className="dis_img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="dis_conten">
                                <span>Summer sale</span>
                                <h3>Up to 70%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Discount;