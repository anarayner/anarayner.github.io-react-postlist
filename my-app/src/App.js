import React, {useRef, useState} from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from './components/ClassCounter';
//import Post from './components/Post';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPost] = useState([
      {id: 1, title: 'Javascript', body:'Javascript is programming language'},
      {id: 2, title: 'Python', body:'Python is programming language'},
      {id: 3, title: 'Java', body:'Java is programming language'},
      {id: 4, title: 'C++', body:'C++ is programming language'}
      ])

    const [posts2, setPost2] = useState([
        {id: 1, title: 'Developer', body:'Developer is position'},
        {id: 2, title: 'Designer', body:'Designer is position'},
        {id: 3, title: 'Manager', body:'Manager is position'},
        ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')



    const addNewPost = (e) => {
      e.preventDefault();
    // creating new post
        const newPost = {
            id: new Date(),
            title,
            body,
        }
        console.log(newPost)
        setPost([...posts, newPost])
        setTitle('')
        setBody('')
    }

  return (
    <div className="App">
        <form>
            {/*{Управляемый компонент}*/}
            <MyInput
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                type='text'
                placeholder='Post name' />

            <MyInput
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            type='text'
            placeholder='Post description'/>
            <MyButton onClick={addNewPost} >Create post</MyButton>
        </form>
        <PostList posts={posts} title={'Programming languages' }/>
        <PostList posts={posts2} title={'Positions'}/>

    </div>
  );
}

export default App;
