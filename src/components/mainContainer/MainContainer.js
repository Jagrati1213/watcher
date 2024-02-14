import React from 'react'
import VideoContainer from '../videoContainer/VideoContainer';
import ButtonList from '../btnList/ButtonList';
import { useSelector } from 'react-redux';
import { useFetchYoutubeVideos } from '../../utils/hooks/useFetchYoutubeVideos';

const MainContainer = () => {

    const { isMenuOpen } = useSelector((store) => store.appConfig);
    const { error } = useFetchYoutubeVideos();

    return (
        <div className={`${isMenuOpen ? 'ml-48' : 'mx-4'} flex-1 py-10`}>
            {
                error ? <h1 className='text-xl text'>Error fetching YouTube videos :{error}</h1> :
                    <>
                        <ButtonList />
                        <VideoContainer />
                    </>
            }
        </div>
    )
}

export default MainContainer