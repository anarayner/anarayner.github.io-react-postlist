import React, { useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Select from './components/UI/select/Select';

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'Javascript is programming language'},
      {id: 2, title: 'Python', body:'Angular is not programming language'},
      {id: 3, title: 'Java', body:'Java is programming language'},
      {id: 4, title: 'AC++', body:'AC++ is programming language'}
      ])


    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
       setPosts(posts.filter(p => p.id !==post.id))
    }

    // const [selectedSort, setSelectedSort] = useState('') -- .sort
    // const [searchQuery, setSearchQuery] = useState('') -- .filter

    const [filter, setFilter] = useState({sort:'', query:''})
    const [sortPosts, setSortPost] = useState('')

    const sortedPosts =(sort) =>{
        console.log(sort)
        setSortPost(sort)
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))

    }

    const filteredPosts = posts.filter((post) =>
        filter.sort
        ?
        post[filter.sort].toLowerCase().includes(filter.query)
        :
        post.title.toLowerCase().includes(filter.query))

  return (
    <div className="App">
        {/*передаем в новый агрумент фкнкцию обратного вызова*/}
        <PostForm create={createPost}/>
        <hr style={{marginTop: '20px'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>

        <Select
            value={sortPosts}
            onChange={sortedPosts}
            defaultValue='Sort by'
            options={[
                {value: 'title', name:'Title'},
                {value: 'body', name: 'Description'}
            ]}
        />

        {filteredPosts.length !==0
            ?
            <PostList remove={removePost} posts={filteredPosts} title={'Programming languages' }/>
            :
            <h1 style={{textAlign:'center', marginTop:'100px'}}>Post not found, sorry!</h1>
        }

    </div>
  );
}

export default App;
