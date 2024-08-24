import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header className="bg-indigo-600 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <StaticImage
                        className="w-10 h-10 rounded-full"
                        objectFit="scale-down"
                        src="../images/icon.png"
                        alt="Kimi & Clara"
                    />
                    <span className="text-lg font-semibold">Kimi & Clara</span>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-indigo-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/anniversary" className="hover:text-indigo-200">
                                Anniversary
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-indigo-200">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;