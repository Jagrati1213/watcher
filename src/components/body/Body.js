import React from 'react'
import Menu from '../sidebar/Menu';
import { Outlet } from 'react-router';
import Header from '../header/Header';
import { useSelector } from 'react-redux';

function Body() {
    const { isMenuOpen } = useSelector((store) => store.appConfig);

    return (
        <div className='flex gap-2 h-screen mt-24'>
            <Header />
            <Menu />
            <div className={`${isMenuOpen ? 'ml-48' : 'ml-5'} flex-1`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body