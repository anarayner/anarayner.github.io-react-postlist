import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setisLoading] = useState(false)
    useEffect(() =>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    })
    return(
        <AuthContext.Provider value={{
           isAuth,
           setIsAuth
        }}>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
        )
}

export default App;
