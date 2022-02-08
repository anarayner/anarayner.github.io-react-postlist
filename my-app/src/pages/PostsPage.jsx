import React, {useEffect,  useState} from 'react';
import '../styles/App.css'
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import {getTotalPages} from '../utils/pages';
import {usePostsFilter} from '../hooks/usePostsFilter';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/loader/Loader';
import PostList from '../components/PostList';
import MyPagination from '../components/UI/pagination/MyPagination';
import MySelect from '../components/UI/select/MySelect';
import MyModal from '../components/UI/modal/Modal';


function PostsPage() {

    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const limit = 10;
    const [page, setPage] = useState(1)

    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll (limit, page)
        setPosts (response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getTotalPages(totalCount, limit))
    })

    const changePage = (page) =>{
        setPage(page)

    }

    useEffect(()=>{
        fetchPost()
    },[page])


    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !==post.id))
    }

    /* Search posts */
    const [filter, setFilter] = useState({sort:'', query:''})
    const filteredPosts = usePostsFilter(posts, filter.sort, filter.query)

    /* Sort posts */
    const [sortPosts, setSortPost] = useState('')
    const sortedPosts =(sort) =>{
        setSortPost(sort)
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }

    console.log(sortPosts)

    /* Modal window to add new post */
    const [modalVisible, setModalVisible] = useState(false)


    return (
        <div className="App">
            <MyButton 
                style={{marginTop:'20px'}}
                onClick={()=> setModalVisible(true)}>
                Add post
            </MyButton>

            <MyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            <MySelect
                value={sortPosts}
                onChange={sortedPosts}
                defaultValue='Sort by'
                options={[
                    {value: 'title', name:'Title'},
                    {value: 'body', name: 'Description'}
                ]} />


            {isPostsLoading
                ?
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Loader />
                </div>

                :
                <PostList remove={removePost} posts={filteredPosts} postError={postError} title={'Programming languages' }/>

            }

            <MyPagination
                page={page}
                changePage={changePage}
                totalPages={totalPages} />
        </div>
    );
}

export default PostsPage;
