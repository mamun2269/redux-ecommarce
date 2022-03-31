import React from 'react';
import './PageTop.css';
import { Link } from 'react-router-dom';


const PageTop = (props) => {
  return (
    <>
        <div className='pageTop_section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="pageTop_wrrap">
                            <h3 className="top_title">{props.title}</h3>
                             <div className="goto_link">
                                <Link to='/' className="home_link">Home</Link>
                                <span> + </span>
                                <span className="recent_page">{props.title}</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PageTop;