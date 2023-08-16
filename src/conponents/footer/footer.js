import React from 'react';
import logo from './../../img/start.svg'
import {AiOutlineEnvironment, AiOutlineTwitter} from "react-icons/ai";
import {HiOutlinePhone} from "react-icons/hi";
import {IoMailUnreadOutline} from "react-icons/io5";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {IoLogoPinterest} from "react-icons/io";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer flex items-center justify-between">
                  <div>
                      <div className='flex items-center'>
                          <img src={logo} alt=""/>
                          <span style={{color:'white', fontWeight:'500',fontSize:'20px',marginLeft:'9px'}}>Zone.</span>
                      </div>
                      <div className='flex items-center'>
                          <AiOutlineEnvironment style={{width:'25px',height:'25px',color:'white'}}/>
                          <span style={{color:'white', fontWeight:'500',fontSize:'15px',marginLeft:'9px',padding:'15px 0'}}>Dhaka, Bangladesh</span>
                      </div>
                      <div className='flex items-center'>
                          <HiOutlinePhone style={{width:'25px',height:'25px',color:'white'}}/>
                          <a href="#" style={{color:'white', fontWeight:'500',fontSize:'15px',marginLeft:'9px'}}>0943833399</a>
                      </div>
                      <div className='flex items-center'>
                          <IoMailUnreadOutline style={{width:'25px',height:'25px',color:'white'}}/>
                          <span style={{color:'white', fontWeight:'500',fontSize:'15px',marginLeft:'9px',padding:'15px 0'}}>support@zone.com</span>
                      </div>
                      <div className='flex items-center'>
                          <button type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                  font-medium rounded-lg text-sm px-1.5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                  focus:outline-none dark:focus:ring-blue-800" style={{borderRadius:'50%'}}><FiFacebook className='text-2xl'/>
                          </button>
                          <button type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                  font-medium rounded-lg text-sm px-1.5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                  focus:outline-none dark:focus:ring-blue-800" style={{borderRadius:'50%'}}><AiOutlineTwitter className='text-2xl'/>
                          </button>
                          <button type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                  font-medium rounded-lg text-sm px-1.5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                  focus:outline-none dark:focus:ring-blue-800" style={{borderRadius:'50%'}}><FiInstagram className='text-2xl'/>
                          </button>
                          <button type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                  font-medium rounded-lg text-sm px-1.5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                  focus:outline-none dark:focus:ring-blue-800" style={{borderRadius:'50%'}}><IoLogoPinterest className='text-2xl'/>
                          </button>
                      </div>
                  </div>
                    <div>
                        <p style={{color:'white',fontSize:'17px',fontWeight:'500',padding:'20px 0'}}>Service <br/>
                            Order Management <br/>
                            Social Assistant <br/>
                            Crypto Platform <br/>
                            Analyzer of the News</p>
                    </div>
                    <div>
                        <p style={{color:'white',fontSize:'17px',fontWeight:'500',padding:'20px 0'}}>Company <br/>
                            About Us <br/>
                            News <br/>
                            Our trusted partner <br/>
                            New users FAQ</p>
                    </div>
                    <div style={{color:'white',fontSize:'17px',fontWeight:'500',padding:'20px 0'}}>
                        <p>Supports <br/>
                            Help center <br/>
                            Feedbcak <br/>
                            Contact us <br/>
                            Terms conditins</p>
                    </div>
                    <div style={{color:'white',fontSize:'17px',fontWeight:'500',padding:'20px 0'}}>
                        <p>Resources <br/>
                            Download app <br/>
                            Blog <br/>
                            What’s new <br/>
                            Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
