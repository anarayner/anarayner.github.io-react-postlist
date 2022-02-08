import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import MyButton from '../button/MyButton';
import {AuthContext} from '../../../context';

const NavBar = () => {
     
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = ()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="nav_bar">
            <div className='nav_bar__item'>
                <Link className='nav_bar__link' to='/posts'>Posts</Link>
                <Link className='nav_bar__link' to='/about'>About</Link>
                <button onClick={logout}>Log out</button>
            </div>

        </div>
    );
};

export default NavBar;
