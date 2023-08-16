import React from 'react';
import {FiNavigation, FiSend} from "react-icons/fi";

const Email = () => {
    return (
        <div id='email'>
            <div className="container">
                <div className="email">
                    <h2>Subscribe to get the Latest News</h2>
                    <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                    <div>
                        <div className="relative">
                            <input type="search"
                                   className=" ml-[11%]  w-[80%] p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                                   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                                   dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter your email addres..." style={{borderRadius:'30px' , fontSize:'18px'}} required/>
                                <button type="submit"
                                        className="flex items-center justify-center text-white absolute right-[10%] bottom-2.5  focus:ring-4
                                        font-medium rounded-3xl text-sm px-8 py-3 dark:bg-blue-600
                                         dark:focus:ring-blue-800"><FiSend className='text-[20px]'/>Subscribe
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;