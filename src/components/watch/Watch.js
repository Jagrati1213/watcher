import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CommentSection from '../commentsection/CommentSection';

const Watch = () => {

    const [searchParams] = useSearchParams();

    return (
        <div className='flex-1'>
            <div>
                <iframe width="1160"
                    height="615"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                <CommentSection />
            </div>
        </div >
    )
}

export default Watch