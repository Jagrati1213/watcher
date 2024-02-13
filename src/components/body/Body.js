import React from 'react'
import MainContainer from '../mainContainer/MainContainer';
import Menu from '../sidebar/Menu';

function Body() {
    return (
        <div className='flex gap-2'>
            <Menu />
            <MainContainer />
        </div>
    )
}

export default Body