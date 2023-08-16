import React, {useState} from 'react';
import logo from './../../img/golo.svg'
import too from './../../img/22.svg'
import to from './../../img/23.svg'
import doo from './../../img/24.svg'
import {AiFillFacebook, AiOutlineLinkedin, AiOutlineSkype, AiOutlineTwitter} from "react-icons/ai";

const MetTeam = () => {
    return (
        <div id='Team'>
            <div className="container">
                <div className="Team">
                    <h2>Met Our Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className='flex items-center justify-between p-2.5' style={{padding:'50px 0'}}>
                        <div className='Team--icons'>
                            <img src={logo} alt=""/>
                            <h1>Sunny Khan</h1>
                            <h3>Executive officer</h3>
                           <div className='mx-14'>
                               <button type="button"
                                       className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
                                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
                                     dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800
                                     /80 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2"><AiOutlineSkype className='w-[20px] h-3/4'/>
                               </button>
                               <button type="button"
                                       className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                                    font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2 "><AiOutlineLinkedin className='w-[20px] h-3/4'/>
                               </button>
                               <button type="button"
                                       className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                    dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiOutlineTwitter className='w-[20px] h-3/4'/>
                               </button>
                               <button type="button"
                                       className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiFillFacebook className='w-[20px] h-3/4'/>
                               </button>
                           </div>
                        </div>
                        <div className='Team--icons'>
                            <img src={too} alt=""/>
                            <h1>Alina Jesia</h1>
                            <h3>UX/UI DESIGNER</h3>
                            <div className='mx-14'>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
                                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
                                     dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800
                                     /80 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2"><AiOutlineSkype className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                                    font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2 "><AiOutlineLinkedin className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                    dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiOutlineTwitter className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiFillFacebook className='w-[20px] h-3/4'/>
                                </button>

                            </div>
                        </div>
                        <div className='Team--icons'>
                            <img src={to} alt=""/>
                            <h1>Alex Sohag</h1>
                            <h3>BUSINESS DEVELOPMENT</h3>
                            <div className='mx-14'>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
                                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
                                     dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800
                                     /80 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2"><AiOutlineSkype className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                                    font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2 "><AiOutlineLinkedin className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                    dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiOutlineTwitter className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiFillFacebook className='w-[20px] h-3/4'/>
                                </button>

                            </div>
                        </div>
                        <div className='Team--icons'>
                            <img src={doo} alt=""/>
                            <h1>Afroza Mou</h1>
                            <h3>Head of marketing</h3>
                            <div className='mx-14'>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
                                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
                                     dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800
                                     /80 font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2"><AiOutlineSkype className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                                    font-medium rounded-lg text-sm px-1 py-1 text-center mr-2 mb-2 "><AiOutlineLinkedin className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                    dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiOutlineTwitter className='w-[20px] h-3/4'/>
                                </button>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-1 text-center
                                    mr-2 mb-2"><AiFillFacebook className='w-[20px] h-3/4'/>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetTeam;