import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/redux/slices/appSlice';

const Header = () => {

    const dispatch = useDispatch();
    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }
    return (
        <header className='w-full py-6 px-8 shadow-md shadow-slate-200 flex justify-between bg-white z-50 fixed top-0'>

            <div className='flex items-center gap-3'>
                <p className='text-xl cursor-pointer hover:text-yellow-700' onClick={handleToggleMenu}><RiMenu2Line /></p>
                <h2 className='text-2xl text-yellow-700 font-bold'>The Watcher</h2>
            </div>

            <div className='flex w-1/2'>
                <input type='text' placeholder='Search'
                    className='search-input' />
                <button className='search-btn'>
                    <RiSearch2Line />
                </button>
            </div>

            <div className='flex justify-center text-3xl items-center'>
                <FaUserCircle />
            </div>

        </header>
    )
}

export default Header