import React from 'react';

import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <div className="container">
                <nav className="w-full flex justify-between gap-6 relative">
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <StaticImage class="w-10 h-10 rounded-full" objectFit='scale-down' src='../images/icon.png'
                                         alt='Kimi & Clara'/>
                            <div className="inline-flex text-lg font-semibold text-gray-900">
                                Kimi & Clara
                            </div>
                        </a>
                    </div>
                    <div data-nav-overlay="true" aria-hidden="true"
                         className="fixed hidden inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl">
                    </div>
                    <div data-navbar="true"
                         className="flex invisible opacity-0 translate-y-10 overflow-hidden lg:visible lg:opacity-100 lg:-translate-y-0 lg:scale-y-100 lg:flex-row lg:relative lg:justify-between lg:items-center
                          duration-300 ease-linear flex-col gap-y-6 gap-x-4  w-full  absolute  top-full lg:top-0 lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0">
                        <ul
                            className="border-t border-gray-100  lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 w-full lg:justify-center lg:items-center">

                            <li><Link to="/"
                                      className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">Home</Link>
                            </li>
                            <li><Link to="/anniversary"
                                      className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">Anniversary</Link>
                            </li>
                            <li><Link to="/about"
                                      className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    );
}

export default Header;