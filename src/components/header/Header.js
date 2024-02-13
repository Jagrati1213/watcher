import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className='w-full py-6 px-8 bg-slate-400 flex justify-between'>

            <div className='flex items-center gap-3'>
                <p className='text-lg'><RiMenu2Line /></p>
                <h2 className='text-2xl'>The Watcher</h2>
            </div>

            <div className='border-[1px] border-gray-500 rounded-full bg-gray-100 overflow-hidden flex items-center  w-1/2'>
                <input type='text' placeholder='Search' className='bg-transparent w-11/12 h-full px-3 outline-none border-none' />
                <button className='text-xl border-l-2 border-gray-500 h-full  p-3'><RiSearch2Line /></button>
            </div>

            <div className='flex justify-center text-3xl items-center'>
                <FaUserCircle />
            </div>

        </header>
    )
}

export default Header