import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchCommentById, isCommentLoading, commentError] = useFetching(async (id)=>{
        const response = await PostService.getCommentById(params.id)
        setComments(response.data)
    })

    useEffect(() =>{
        fetchPostById(params.id)
        fetchCommentById(params.id)
    },[])

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div> <h1>{post.title} </h1>{post.body}</div>
            }
            <h3>
                {isCommentLoading
                    ? <Loader/>
                    : 
                    <div>
                        {comments.map(comm =>
                            <div style={{marginTop: '20px'}} key={comm.id}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
                }
            </h3>
        </div>

    );
};

export default PostIdPage;
