import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import PostsPage from '../pages/PostsPage';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import {AuthContext} from '../context';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (

            isAuth
                ?
            <Routes>
                <Route exact path='/posts' element={<PostsPage/>}/>
                <Route exact path='/posts/:id' element={<PostIdPage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="*" element={<Navigate replace to="/posts" />} />
            </Routes>
                :
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;
