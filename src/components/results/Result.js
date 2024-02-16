import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_QUERY_API } from '../../utils/constant';
import VideoContainer from '../videoContainer/VideoContainer';
import { useFetchYoutubeVideos } from '../../utils/hooks/useFetchYoutubeVideos';
import Loader from '../loader/Loader';

const Result = () => {

    const [searchParams] = useSearchParams();
    const url = `${YOUTUBE_SEARCH_QUERY_API}${searchParams.get('search_query')}&key=${process.env.REACT_APP_API_KEY}`;

    const { error, youData, loader } = useFetchYoutubeVideos(url, [searchParams.get('search_query')]);

    return (
        <div>
            {
                error ? <h1 className='text-xl text'>Error fetching YouTube videos :{error}</h1>
                    : loader ? <Loader />
                        : <VideoContainer data={youData} />
            }
        </div>
    )
}

export default Result