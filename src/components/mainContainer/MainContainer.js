import React from 'react'
import VideoContainer from '../videoContainer/VideoContainer';
import ButtonList from '../btnList/ButtonList';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const { isMenuOpen } = useSelector((store) => store.appConfig);

    return (
        <div className={`${isMenuOpen ? 'ml-48' : 'mx-4'} flex-1 py-10`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer