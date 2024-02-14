import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className='w-full py-6 px-8 shadow-md shadow-slate-200 flex justify-between bg-white z-50 fixed top-0'>

            <div className='flex items-center gap-3'>
                <p className='text-lg'><RiMenu2Line /></p>
                <h2 className='text-2xl'>The Watcher</h2>
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