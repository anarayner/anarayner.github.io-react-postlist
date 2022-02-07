import React from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import About from './pages/About';
import PostsPage from './pages/PostsPage';
import NavBar from './components/UI/navbar/Navbar';


function App() {
    return(
        <BrowserRouter>
            <NavBar/>
        <Routes>
            <Route path='/posts' element={<PostsPage/>}/>
            <Route path='/about' element={<About/>}/>
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
            </BrowserRouter>
        )
}

export default App;
