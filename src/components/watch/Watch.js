import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CommentSection from '../commentsection/CommentSection';
import LiveChat from '../liveChat/LiveChat';

const Watch = () => {

    const [searchParams] = useSearchParams();

    return (
        <div className='flex gap-1 flex-col lg:flex-row'>
            <div className='w-full lg:w-4/5 h-[500px] md:h-[700px] bg-gray-200 z-30'>
                <iframe
                    className='w-full h-full'
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                {/* <CommentSection /> */}
            </div>
            <LiveChat />
        </div >
    )
}

export default Watch