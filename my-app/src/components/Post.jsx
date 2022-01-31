import React from 'react';

//component can take input data, this data is called props and this is an empty object where we can put something
const Post = (props) => {
    return (
        <div className='posts'>
            <div className='post__content'>
                <strong className='post__content__name'>{props.post.title}</strong>
                <div className='post__content__desc'>{props.post.body}</div>
            </div>
            <div className='post__btn'>
                <button onClick={()=> props.remove(props.post)} className='btn'>Delete</button>
            </div>
            
        </div>
    );
};

export default Post;
