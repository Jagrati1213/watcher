import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import commentsData from '../../utils/data/commentsData.json'


export const Comment = ({ comment }) => {
    return <div className='flex gap-3'>
        <div className='text-3xl'>
            <FaUserCircle />
        </div>
        <div>
            <h1 className='text-sm font-semibold'>{comment?.name}</h1>
            <p className='text-xs'>{comment?.title}</p>
        </div>
    </div>
}

export const CommentsList = ({ comments }) => {
    return comments?.map((item, index) => {
        return <div key={index} className='my-5'>
            <Comment comment={item} />
            <div className='ml-7 pl-2'>
                <CommentsList comments={item?.replies} />
            </div>
        </div>
    })
}

const CommentSection = () => {
    return (
        <div className='my-2 py-5' >
            <h3 className='text-lg font-semibold tracking-wider'>Comments</h3>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentSection;
