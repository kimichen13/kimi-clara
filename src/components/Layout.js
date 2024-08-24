import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto py-8">{children}</main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    &copy; {new Date().getFullYear()} Our Memories. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;