import React from 'react';
import Post from './Post';

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', margin:'100px 0 20px 0'}}>
                {title}
            </h1>
            {posts.map((post, index)=>
                <Post numder={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
