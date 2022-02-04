import React from 'react';
import Post from './Post';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, remove,postError}) => {

    if(postError){
        return (
            <h1 style={{textAlign:'center', marginTop:'100px'}}>
                {postError}
            </h1>
        )
    }

    if (!posts.length) {
        return (
            <h1 style={{textAlign:'center', marginTop:'100px'}}>
                Post not found, sorry!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', margin:'100px 0 20px 0'}}>
                {title}
            </h1>
            <TransitionGroup>
            {posts.map((post, index)=>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <Post remove={remove} numder={index+1} post={post} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
