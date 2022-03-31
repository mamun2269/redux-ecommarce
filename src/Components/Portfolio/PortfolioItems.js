import React,{ useState } from 'react';
import PortfolioData from './PortfolioData';

const PortfolioItems = () => {
    const [ items, setItems]= useState(PortfolioData);
    const filterItem=(catItem)=>{
        let updateItem= PortfolioData.filter((curElem)=>{
            return curElem.category === catItem;
        });
        setItems(updateItem);
    }
  return (
    <>
        <div className="portfolio_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <ul className="tab_menu">
                            <button onClick={() => setItems(PortfolioData)} >All</button>
                            <button onClick={() => filterItem('Clothing')}>Clothing</button>
                            <button onClick={() => filterItem('Accessories')} >Accessories</button>
                            <button onClick={() => filterItem('Jewellery')}>Jewellery</button>
                            <button onClick={() => filterItem('Homemade')}>Homemade</button>
                        </ul>
                    </div>
                </div>

                <div className="row gy-3 ">
                {
                    items.map((elem)=>{
                        const{ id, desc, image, category}=elem;
                        return(
                            <div className="col-md-4" key={id}>
                                <div className="portfolio_item">
                                    <img className="" src={image} alt="" />
                                    <div className="portfolio_details">
                                        <h6>{desc}</h6>
                                        <span>Clothing</span>
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

export default PortfolioItems;