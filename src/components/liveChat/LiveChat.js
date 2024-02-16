import React, { useEffect, useRef, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../utils/redux/slices/chatSlice';
import randomNameGenerator from "../../utils/data/randomNameGenerator";
import randomMessageGenerator from '../../utils/data/randomMessageGenerator';
import randomColorGenerator from '../../utils/data/randomColorGenerator';

const LiveChat = () => {

    const dispatch = useDispatch();
    const { messages } = useSelector(store => store.chats);
    const liveMsg = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: randomNameGenerator(),
                message: randomMessageGenerator(),
                profileColor: randomColorGenerator(),
            }))
        }, 1500);

        return (() => {
            clearInterval(timer);
        })
    }, []);

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: 'jagrati',
            message: liveMsg.current.value,
            profileColor: 'red',
        }));
        liveMsg.current.value = null;
    }

    return (
        <div className='border-2 border-gray-300 w-full lg:w-96 rounded mt-4 lg:mt-0'>
            <h2 className='text-xl bg-gray-200 p-2 font-bold'>Live Chat</h2>
            <div className='h-[600px] overflow-y-scroll flex flex-col-reverse p-2'>
                {
                    messages?.map((chat, index) => {
                        return <ChatMessage name={chat.name} message={chat.message} color={chat.profileColor} key={index} />
                    })
                }
            </div>
            <form
                onSubmit={handleAddComment}
                className='flex bg-gray-300 justify-between border-t border-gray-500'>
                <input
                    ref={liveMsg}
                    type="text"
                    className='w-full border-none outline-none px-4'
                    placeholder='comment' />
                <button
                    className='px-4 py-2 text-white rounded bg-yellow-800 font-bold'>send</button>
            </form>
        </div>

    )
}

export default LiveChat;

export const ChatMessage = ({ name, message, color }) => {
    return <div className='flex gap-2 my-2 px-2'>
        <div className='flex justify-center text-3xl items-center' style={{ color: `${color}` }}>
            <FaUserCircle />
        </div>
        <span className='font-semibold'>{name}</span>
        <span>{message}</span>
    </div>
}