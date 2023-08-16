import React, {useState} from 'react';
import {FiArrowRight} from "react-icons/fi";
import logo from './../../img/2.svg'
import too from './../../img/3.svg'
import to from './../../img/5.svg'
import doo from './../../img/6.svg'

const Zone = () => {
    // if (!isVisible) return null
    const [active , setActive] = useState(false)
    return (
        <div id='zone'>
            <div className="container">
                <div className="zone">
                    <div className='zone--one'>
                        <h2>Our Service </h2>
                        <p>We turn information into actionable insights We work to understand your issues <br/>
                            and are driven to ask better questions in the pursuit of making work.</p>
                    </div>
                    <div className='hero--zoom flex items-center justify-between' style={{padding:'80px 0'}}>
                        <div className='zone--too'>
                            <img style={{margin:'10px 38%'}} src={too} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span onClick={() => setActive(!active)} className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                {
                                 <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                                }
                            </span>
                        </div>
                        <div className='zone--too'>
                            <img style={{margin:'10px 40%'}} src={logo} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                            </span>
                        </div>
                        <div className='zone--too'>
                            <img style={{margin:'10px 40%'}} src={too} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                            </span>
                        </div>
                    </div>
                    <div className='hero--zom flex items-center justify-between'>
                        <div className='zone--too'>
                            <img style={{margin:'10px 38%'}} src={doo} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                            </span>
                        </div>
                        <div className='zone--too'>
                            <img style={{margin:'10px 40%'}} src={to} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                            </span>
                        </div>
                        <div className='zone--too'>
                            <img style={{margin:'10px 40%'}} src={doo} alt="img"/>
                            <h4>Order Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <span className='flex items-center justify-center' style={{cursor:'pointer'}}>
                                <h2>Learn more</h2>
                                <FiArrowRight style={{color:'white',width:'20px',height:'20px'}}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Zone;