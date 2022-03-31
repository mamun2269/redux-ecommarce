import reac, { useState } from 'react';
import { SData } from '../Service/ServiceData';


const Service=()=>{
    const[ sdata, setSdata ]= useState(SData);
    console.log(sdata);
    return(
        <>
            <div className="service_section">
                <div className="container">
                    <div className="row">
                        {
                            sdata.map((elem)=>{
                                return (
                                    <div className="col-md-3 service_card" key={ elem.id }>
                                        <span className="service_icon">{elem.service_icon}</span>
                                        <h4 className="service_title">{elem.title}</h4>
                                        <p className='service_desp'>{elem.description}</p>
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
export default Service;