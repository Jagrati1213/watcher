import React from 'react'
import { useFetchYoutubeVideos } from '../../utils/hooks/useFetchYoutubeVideos';
import VideoCard from '../videoCard/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const { youData } = useFetchYoutubeVideos();
    if (youData?.length === 0) return;
    return (
        <div className='flex flex-wrap gap-5'>
            {
                youData?.map((item) => {
                    return <Link to={`/watch?v=${item.id}`} key={item.id}><VideoCard data={item} /></Link>
                })
            }
        </div>
    )
}

export default VideoContainer