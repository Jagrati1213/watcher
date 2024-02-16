import React from 'react'

const Loader = () => {
    return (
        <div className='flex flex-wrap w-full justify-center gap-4'>
            {
                Array(24).fill(null).map((_, i) => {
                    return <Load key={i} />
                })
            }
        </div>
    )
}

export default Loader

export const Load = () => {
    return <div className='p-5 bg-gray-200 transform cursor-pointer h-72 w-72 flex flex-col gap-5 animate-pulse'>
        <div className='bg-gray-300 transform cursor-pointer h-36 w-full rounded' ></div>
        <div className='bg-gray-300 transform cursor-pointer h-8 w-full rounded' ></div>
        <div className='bg-gray-300 transform cursor-pointer h-5 w-full rounded' ></div>
    </div>
}