import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CommentSection from '../commentsection/CommentSection';
import LiveChat from '../liveChat/LiveChat';

const Watch = () => {

    const [searchParams] = useSearchParams();

    return (
        <div className='flex-1 flex gap-1 flex-wrap'>
            <div>
                <iframe width="1160"
                    height="615"
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