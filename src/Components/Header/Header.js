import React from 'react';
import { Link } from 'react-router-dom';
import baner1 from '../../images/banner.jpg';
import baner2 from '../../images/banner_2.jpg';
import baner3 from '../../images/banner_3.jpg';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Header = () => {
          //Owl Carousel Settings
          const options = {
            loop: true,
            center: true,
            items: 2,
            margin: 10,
            autoplay: true,
            dots: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }

  return (
    <>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <div className="header_section slider_tem1" style= { { backgroundImage: `url(${baner1})`} }>
              <div className="container">
                <div className="row">
                    <div className="col-md-5"> </div>
                      <div className="col-md-7">
                          <div className="header_content">
                          <span className='header_title'>Spring-Summer 2022</span>
                          <h1>flash sell off <span className="discount">70%</span> </h1>
                          <p>Abc computer typography is the work of typesetters compositors typographers graphic designers art directors manga artists</p>
                          <Link to="/" className="explore_btn">Explore Now</Link>
                          </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="header_section slider_tem2" style={{ backgroundImage: `url(${baner2})`  }}>
              <div className="container">
                <div className="row">
                      <div className="col-md-7">
                          <div className="header_content">
                          <span className='header_title'>Summer 2022</span>
                          <h1>New Arrival Collection  </h1>
                          <p>Abc computer typography is the work of typesetters compositors typographers graphic designers art directors manga artists</p>
                          <Link to="/" className="explore_btn">Explore Now</Link>
                          </div>
                    </div>
                    <div className="col-md-5"> </div>
                </div>
              </div>
          </div>
          <div className="header_section slider_tem2" style={{ backgroundImage: `url(${baner3})`  }}>
              <div className="container">
                <div className="row">
                      <div className="col-md-7">
                          <div className="header_content">
                          <span className='header_title'> New Season </span>
                          <h1>Lookbook Collection  </h1>
                          <p>Abc computer typography is the work of typesetters compositors typographers graphic designers art directors manga artists</p>
                          <Link to="/" className="explore_btn">Explore Now</Link>
                          </div>
                    </div>
                    <div className="col-md-5"> </div>
                </div>
              </div>
          </div>
        </OwlCarousel>
    </>
  )
}

export default Header;