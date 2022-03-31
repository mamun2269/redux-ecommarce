import React from 'react';
import './FrameMenu.css';
import { Link } from 'react-router-dom';

import women from '../../images/menu/women.webp';
import men from '../../images/menu/men.webp';
import them from '../../images/menu/them.webp';

const MenuData=[
    { id:1, img: women, title:'Women'},
    { id:1, img: men, title:'Men'},
    { id:1, img: them, title:'Them'},
]


const FrameMenu = () => {
  return (
    <>
        <div className="frame_menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="menu_item">
                            <img src={women} alt=" frame img" />
                            <div className="menu_overlay">
                                <h4 className="title">For Women</h4>
                                <Link to='/ladies' className='menu_link'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="menu_item">
                            <img src={men} alt=" frame img" />
                            <div className="menu_overlay">
                                <h4 className="title">For Men</h4>
                                <Link to='/jens' className='menu_link'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="menu_item">
                            <img src={them} alt=" frame img" />
                            <div className="menu_overlay">
                                <h4 className="title">For Them</h4>
                                <Link to='/' className='menu_link'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FrameMenu;