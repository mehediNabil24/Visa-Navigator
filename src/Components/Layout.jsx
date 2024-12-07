import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto' ><Header></Header></section>
            <section className='w-11/12 mx-auto'><Outlet></Outlet></section>
            
            
        </div>
    );
};

export default Layout;