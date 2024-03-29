import React, { useEffect, useRef, useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/redux/slices/appSlice';
import { Link } from 'react-router-dom';
import { useFetchYoutubeSearches } from '../../utils/hooks/useFetchYoutubeSearches';

const Header = () => {

    const dispatch = useDispatch();
    const searchInputRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [hideSuggestion, setHideSuggestion] = useState(false);

    // const handleToggleMenu = () => {
    //     dispatch(toggleMenu());
    // }

    const searchData = useFetchYoutubeSearches(searchQuery);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setHideSuggestion(false);
            }
        };
        document.body.addEventListener('click', handleDocumentClick);
        return () => {
            document.body.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <header className='header'>

            <div className='flex items-center gap-3'>
                {/* <p className='text-xl cursor-pointer hover:text-yellow-700' onClick={handleToggleMenu}><RiMenu2Line /></p> */}
                <h2 className='text-xl md:text-2xl text-yellow-700 font-bold'>
                    <Link to={'/'}>The Watcher</Link>
                </h2>
            </div>

            <div className='flex w-full md:w-1/2 flex-col relative'>
                <div className='flex w-full'>
                    <input
                        ref={searchInputRef}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setHideSuggestion(true)}
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
                                    return <Link to={`/results?search_query=${searchQuery}`}
                                        key={index}>
                                        <li className='search-list'
                                            onClick={() => setHideSuggestion(false)}>
                                            <RiSearch2Line />{item}
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                }

            </div>
        </header>
    )
}

export default Header