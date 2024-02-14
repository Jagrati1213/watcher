import React from 'react'

const VideoCard = ({ data }) => {

    let views;

    if (1 <= data?.statistics?.viewCount && data?.statistics?.viewCount < 1000) {
        views = `${data?.statistics?.viewCount}`;
    }
    else if (1000 <= data?.statistics?.viewCount && data?.statistics?.viewCount < 10000) {
        views = `${Math.floor(data?.statistics?.viewCount / 1000)}K`;
    }
    else {
        views = `${Math.floor(data?.statistics?.viewCount / 10000)}M`;
    }

    return (
        <div className='w-80 p-5 bg-gray-100 hover:shadow-lg transform cursor-pointer'>
            <div>
                <img src={data?.snippet?.thumbnails?.medium?.url} alt={data?.channelTitle} className='rounded' />
            </div>
            <h3 className='font-semibold'>{`${data?.snippet?.title.slice(0, 60)}...`}</h3>
            <h5 className='text-sm text-gray-500 font-semibold py-1 tracking-wide'>{data?.snippet?.channelTitle}</h5>
            <p className='text-sm text-gray-500 tracking-wide'>{views} views</p>
        </div>
    )
}

export default VideoCard