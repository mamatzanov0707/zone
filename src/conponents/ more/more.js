import React from 'react';
import logo from './../../img/9.svg'


const More = () => {
    return (
        <div id='more'>
            <div className="container">
                <div className="more flex items-center justify-between">
                    <img src={logo} alt="img"/>
                    <div className='more--zoom'>
                        <h2>We complete every projects <br/>
                            extra care as customer need</h2>
                      <p>      pLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                          non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                          scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                          eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                          error. Tempora odit laborum iure inventore possimus laboriosam qui nam.</p>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                                focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm
                                px-5 py-2.5 text-center mr-2 mb-2">Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;