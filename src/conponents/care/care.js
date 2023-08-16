import React from 'react';
import logo from './../../img/10.svg'

const Care = () => {
    return (
        <div id='care'>
            <div className="container">
                <div className="care flex items-center justify-between">
                    <div className='care--too'>
                        <h2>We complete every project <br/>
                            extra care as customer need</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe  <br/>
                            scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                            eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600
                                to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                                focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50
                                dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5
                                text-center mr-2 mb-2">Read more
                        </button>
                    </div>
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Care;