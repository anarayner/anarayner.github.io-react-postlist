import React from 'react';

const Postitem = () => {
    return (
        <div className='posts'>
            <div className='post__content'>
                <strong className='post__content__name'>Javascript</strong>
                <div className='post__content__desc'>Javascript is programming language</div>
            </div>
            <div className='post__btn'>
                <button className='btn'>Open</button>
                <button className='btn'>Delete</button>
            </div>
            
        </div>
    );
};

export default Postitem;
