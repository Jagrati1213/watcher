import React from 'react'
import { useFetchYoutubeVideos } from '../../utils/hooks/useFetchYoutubeVideos';
import VideoCard from '../videoCard/VideoCard';

const VideoContainer = () => {

    const { youData } = useFetchYoutubeVideos();
    if (youData?.length === 0) return;
    return (
        <div className='flex flex-wrap gap-5'>
            {
                youData?.map((item) => {
                    return <VideoCard key={item.id} data={item} />
                })
            }
        </div>
    )
}

export default VideoContainer