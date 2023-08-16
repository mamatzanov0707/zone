import React from 'react';
import {BiCaretRightCircle} from "react-icons/bi";
import logo from './../../img/Saly-19.png'
const Hero = () => {
    return (
       <div id='hero'>
           <div className='container'>
               <div className='hero flex items-center justify-between'>
                   <div className='hero--zone'>
                       <h2>Virtual Reality <br/>
                           Business Solutions</h2>
                       <p>We have over 15 year exprience in business consultting arena. We have over <br/>
                           15 year exprience in business consultting arena and artficial intelligence.</p>
                       <div className='flex items-center py-3'>
                           <button type="button"
                                   className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br
                                   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm
                                   px-5 py-2.5 text-center mr-2 mb-2">Join Us
                           </button>
                           <a href="https://youtu.be/8xX4Wb1bn-E"><BiCaretRightCircle className='text-2xl cursor-pointer' style={{color:'white'}}/></a>
                           <h4 style={{color:'white',fontSize:'16px',fontWeight:'500',marginLeft:'10px' }}>Watch video</h4>
                       </div>
                   </div>
                   <img className='w-[52%]' src={logo} alt=""/>
               </div>
           </div>
       </div>
    );
};

export default Hero;