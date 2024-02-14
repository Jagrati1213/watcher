import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {

    const { isMenuOpen } = useSelector((store) => store.appConfig);
    const [searchParams] = useSearchParams();

    return (
        <div className={`${isMenuOpen ? 'ml-48' : 'ml-5'} flex-1`}>
            <div>
                <iframe width="1160"
                    height="615"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </div >
    )
}

export default Watch