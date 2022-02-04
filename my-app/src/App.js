import React, {useEffect, useState} from 'react';
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

function App() {

  const [posts, setPosts] = useState([])


    // /* Animation while posts is loading */
    // const [isPostsLoading, setIsPostsLoading] = useState(true)
    //
    // /* Modal window to add new post */
    // async function fetchPost(){
    //     const posts = await PostService.getAll()
    //     setPosts(posts)
    //     setIsPostsLoading(false)
    // }

    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll ()
        setPosts (posts)
    })

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


    </div>
  );
}

export default App;
