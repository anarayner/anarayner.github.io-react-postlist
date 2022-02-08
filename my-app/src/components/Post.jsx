import React from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import MyPostButton from './UI/button/MyPostButton';

//component can take input data, this data is called props and this is an empty object where we can put something
const Post = (props) => {
    const navigate = useNavigate()
    return (
        <div className='posts'>
            <div className='post__content'>
                <strong className='post__content__name'>{props.post.title}</strong>
                <div className='post__content__desc'>{props.post.body}</div>
            </div>
            <div className='post__btn'>
                <MyPostButton
                    onClick={()=> navigate(`/posts/${props.post.id}`) }
                    className='btn'>
                        Open
                        </MyPostButton>
                <MyPostButton onClick={()=> props.remove(props.post)} className='btn'>Delete</MyPostButton>
            </div>
            
        </div>
    );
};

export default Post;
