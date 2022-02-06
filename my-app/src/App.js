import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Select from './components/UI/select/Select';
import Modal from './components/UI/modal/Modal';
import MyButton from './components/UI/button/MyButton';
import {usePostsFilter} from './hooks/usePostsFilter';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import {useFetching} from './hooks/useFetching';
import {getTotalPages} from './utils/pages';
import {usePagination} from './hooks/usePagination';

function App() {

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

   const paginationRange = usePagination(totalPages)


    useEffect(()=>{
        fetchPost()
    },[])


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

    /* Modal window to add new post */
    const [modalVisible, setModalVisible] = useState(false)


    return (
    <div className="App">
        <MyButton onClick={()=> setModalVisible(true)}>Add post</MyButton>

        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <PostForm create={createPost}/>
        </Modal>

        <hr style={{marginTop: '20px'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <Select
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
        <div className='page_container'>
        {paginationRange.map(p=>
            <button  
                key={p+1}
                onClick={()=> setPage(p)}
                className={page === p ? 'page page_current': 'page'} >
                {p}
            </button>)}
        </div>

    </div>
  );
}

export default App;
