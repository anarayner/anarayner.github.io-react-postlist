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

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    // creating one object instead (look PostForm)


    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
       setPosts(posts.filter(p => p.id !==post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')
    const sortPost = (sortSelection) =>{
      setSelectedSort(sortSelection)
      setPosts([...posts].sort((a,b)=>a[sortSelection].localeCompare(b[sortSelection])))
    }


  return (
    <div className="App">
        {/*передаем в новый агрумент фкнкцию обратного вызова*/}
        <PostForm create={createPost}/>
        <hr style={{marginTop: '20px'}}/>
        <Select
            value={selectedSort}
            onChange={sortPost}
            defaultValue='Sort by'
            options={[
                {value: 'title', name:'Title'},
                {value: 'body', name: 'Description'}
            ]}
        />
        <MyInput placeholder={'Search'}/>

        {posts.length !==0
            ?
            <PostList remove={removePost} posts={posts} title={'Programming languages' }/>
            :
            <h1 style={{textAlign:'center'}}>Post not found, sorry!</h1>
        }

    </div>
  );
}

export default App;
