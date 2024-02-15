import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/redux/slices/appSlice';
import { Link } from 'react-router-dom';
import { useFetchYoutubeSearches } from '../../utils/hooks/useFetchYoutubeSearches';

const Header = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [hideSuggestion, setHideSuggestion] = useState(false);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const searchData = useFetchYoutubeSearches(searchQuery);

    return (
        <header className='header'>

            <div className='flex items-center gap-3'>
                <p className='text-xl cursor-pointer hover:text-yellow-700' onClick={handleToggleMenu}><RiMenu2Line /></p>
                <h2 className='text-2xl text-yellow-700 font-bold'>
                    <Link to={'/'}>The Watcher</Link>
                </h2>
            </div>

            <div className='flex w-1/2 flex-col relative'>
                <div className='flex w-full'>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setHideSuggestion(true)}
                        onBlur={() => setHideSuggestion(false)}
                        type='text'
                        placeholder='Search'
                        className='search-input' />
                    <button className='search-btn'>
                        <RiSearch2Line />
                    </button>
                </div>
                {
                    (hideSuggestion && searchData?.length > 0) && <div className='search-list-container'>
                        <ul className='py-2'>
                            {
                                searchData?.map((item, index) => {
                                    return <li key={index}
                                        className='search-list'>
                                        <RiSearch2Line />{item}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                }

            </div>

            <div className='flex justify-center text-3xl items-center'>
                <FaUserCircle />
            </div>

        </header>
    )
}

export default Header