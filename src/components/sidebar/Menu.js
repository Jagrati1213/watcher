import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { BsLightbulb } from "react-icons/bs";

const Menu = () => {
    return (
        <div className='w-60 border-r-2 h-full fixed left-0'>
            <ul className='p-5'>
                <li className='flex items-center gap-5 text-base py-1'><GrHomeRounded /> Home</li>
                <li className='flex items-center gap-5 text-base py-1'><SiYoutubeshorts /> Shorts</li>
                <li className='flex items-center gap-5 text-base py-1'><MdOutlineSubscriptions /> Subscription</li>
            </ul>
            <hr />
            <ul className='px-5 py-3'>
                <li className='py-2 font-semibold text-lg'>Subscriptions</li>
                <li className='flex items-center gap-5 text-base py-1'><FaFire /> Trending</li>
                <li className='flex items-center gap-5 text-base py-1'><LuMusic4 /> Music</li>
                <li className='flex items-center gap-5 text-base py-1'><BsLightbulb /> Learning</li>
                <li className='flex items-center gap-5 text-base py-1'><MdPodcasts /> Podcasts</li>

            </ul>
        </div>
    )
}

export default Menu