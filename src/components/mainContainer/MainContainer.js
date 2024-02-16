import React from 'react'
import VideoContainer from '../videoContainer/VideoContainer';
import ButtonList from '../btnList/ButtonList';
import { useFetchYoutubeVideos } from '../../utils/hooks/useFetchYoutubeVideos';
import { VIDEO_API_URL } from '../../utils/constant';

const MainContainer = () => {
    const { error, youData } = useFetchYoutubeVideos(VIDEO_API_URL);

    return (
        <div className='flex-1 py-10'>
            {
                error ? <h1 className='text-xl text'>Error fetching YouTube videos :{error}</h1> :
                    <>
                        {/* <ButtonList /> */}
                        <VideoContainer data={youData} />
                    </>
            }
        </div>
    )
}

export default MainContainer