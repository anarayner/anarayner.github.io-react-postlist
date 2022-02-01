import React, { useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'Javascript is programming language'},
      {id: 2, title: 'Python', body:'Angular is not programming language'},
      {id: 3, title: 'Java', body:'Java is programming language'},
      {id: 4, title: 'C++', body:'C++ is programming language'}
      ])


    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
       setPosts(posts.filter(p => p.id !==post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts =(selectedSort) =>{
      if(selectedSort){
          console.log('run')
          setSelectedSort(selectedSort)
          return setPosts([...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort])))
      }
      return posts
    }



    const filteredPosts = posts.filter((post) => selectedSort
        ?
        post[selectedSort].toLowerCase().includes(searchQuery)
        :
        post.title.toLowerCase().includes(searchQuery))



  return (
    <div className="App">
        {/*передаем в новый агрумент фкнкцию обратного вызова*/}
        <PostForm create={createPost}/>
        <hr style={{marginTop: '20px'}}/>

        <MyInput
            value={searchQuery}
            onChange={e=> setSearchQuery(e.target.value)}
            placeholder={'Search'}/>

        <Select
            value={selectedSort}
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
