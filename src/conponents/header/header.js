import React, {useState} from 'react';
import logo from './../../img/start.svg'
import {BsSun} from "react-icons/bs";
import {MdDarkMode} from "react-icons/md";

const Header = ({getDark}) => {
    const [block , setBlock] = useState(false)
    const [counter,setCounter] = useState(false)
    return (
        <div id='header'>
            <div className='container'>
                <div className="header flex items-center justify-between">
                    <div className='flex items-center'>
                        <img src={logo} alt="img"/>
                        <span style={{color:'white',fontSize:'18px'}} className='mx-2'>Zone.</span>
                    </div>
                    <div onClick={getDark} >
                        <button type="button" onClick={() => setBlock(!block)}
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                            text-sm px-2 py-1.5 text-center mr-2 mb-2">
                            {
                                block ? <MdDarkMode className='text-2xl' style={{color:'white' , cursor:'pointer'}}/> :
                                    <BsSun className='text-2xl' style={{color:'white', cursor:'pointer'}}/>
                            }
                        </button>
                    </div>
                    <div className='header--group'>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Service</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                        <button onClick={() => setCounter(!counter)} type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
                                 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Us
                        </button>
                    </div>
                    <div style={{display: counter  ? 'block' : 'none'}} className='header--register'>
                        <div className='header--register__inputs'>
                            <p>name</p>
                            <input type="text"/>
                            <p>password</p>
                            <input type="number"/>
                            <button>send</button>
                        </div>
                        <p onClick={() => setCounter(!counter)} className='header--register__remove'>X</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;