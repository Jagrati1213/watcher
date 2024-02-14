import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { BsLightbulb } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Menu = () => {
    const { isMenuOpen } = useSelector((store) => store.appConfig);

    return (
        isMenuOpen ?
            <div className='w-auto border-r-2 h-full fixed left-0 z-40' >
                <ul className='p-5'>
                    <li className='menu-item'><GrHomeRounded /> Home</li>
                    <li className='menu-item'><SiYoutubeshorts /> Shorts</li>
                    <li className='menu-item'><MdOutlineSubscriptions /> Subscription</li>
                </ul>
                <hr />
                <ul className='p-5'>
                    <li className='py-2 font-semibold text-lg'>Subscriptions</li>
                    <li className='menu-item'><FaFire /> Trending</li>
                    <li className='menu-item'><LuMusic4 /> Music</li>
                    <li className='menu-item'><BsLightbulb /> Learning</li>
                    <li className='menu-item'><MdPodcasts /> Podcasts</li>

                </ul>
            </div> : null
    )
}

export default Menu