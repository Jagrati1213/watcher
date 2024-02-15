import React from 'react'
import VideoCard from '../videoCard/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ({ data }) => {

    if (data?.length === 0) return;
    return (
        <div className='flex flex-wrap gap-5'>
            {
                data?.map((item) => {
                    return <Link to={`/watch?v=${item.id}`} key={item.id} className='w-full md:w-80'>
                        <VideoCard data={item} />
                    </Link>
                })
            }
        </div>
    )
}

export default VideoContainer