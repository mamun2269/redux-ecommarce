import React from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Discount from '../Discount/Discount';
import Blog from '../Blog/Blog';
import FrameMenu from '../FrameMenu/FrameMenu';
const Home = () => {
  return (
    <>
        <Header/>
        <FrameMenu/>
        <Product/>
        <Discount/>
        <Blog/>

    </>
  )
}

export default Home;