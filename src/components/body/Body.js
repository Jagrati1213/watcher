import React from 'react'
import Menu from '../sidebar/Menu';
import { Outlet } from 'react-router';
import Header from '../header/Header';

function Body() {
    return (
        <div className='flex gap-2 h-screen mt-24'>
            <Header />
            <Menu />
            <Outlet />
        </div>
    )
}

export default Body