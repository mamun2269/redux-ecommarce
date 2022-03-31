import React, { useState } from 'react';
import BlogData from './BlogData';

const Blog = () => {
    const [ data, setdata]= useState(BlogData);
  return (
    <>
        <div className="blog_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section_top">
                            <span className="section_title">LATEST BLOG</span>
                            <p className="section_heading">The freshest and most exciting news</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                {
                    data.map((elem)=>{
                        return(
                            <div className='col-md-4' key={elem.id}>
                                <div className="blog_card">
                                    <div className="blog_frame">
                                        <img className="blog_img" src={elem.img} alt="" />
                                    </div>
                                    <div className="blog_details">
                                        <li className="bloger_info">
                                            <p className="bloger"><span className='user_icon'>{ elem.user }</span>  <span className="bloger_name">{elem.name}</span></p>
                                            <span className="blog_date">{elem.date}</span>
                                        </li> 
                                        <p>Lorem ipsum dolor sit amet elit. Consequuntur explicabo culpa ducimus tempore rerum libero corrupti quos sapiente.</p>
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

export default Blog;