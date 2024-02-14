import React from 'react'
import btnData from '../../utils/data/btnList.json';

const ButtonList = () => {
    return (
        <div className='flex w-full gap-3 mb-4 '>
            {
                btnData?.map((btn, index) => {
                    return <WatcherButton name={btn.name} key={index} />
                })
            }
        </div>
    )
}

export default ButtonList

export const WatcherButton = ({ name }) => {
    return <button className='watcher-btn '>
        {name}
    </button>
}