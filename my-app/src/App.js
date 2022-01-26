import React, {useState} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from './components/ClassCounter';
import Post from './components/Post';
import './styles/App.css'
import PostList from './components/PostList';

function App() {

  const [posts, setPost] = useState([
      {id: 1, title: 'Javascript', body:'Javascript is programming language'},
      {id: 2, title: 'Python', body:'Python is programming language'},
      {id: 3, title: 'Java', body:'Java is programming language'},
      {id: 4, title: 'C++', body:'C++ is programming language'}
      ])

  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
