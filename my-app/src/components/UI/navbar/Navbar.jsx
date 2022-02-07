import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav_bar">
            <div className='nav_bar__item'>
                <Link className='nav_bar__link' to='/posts'>Posts</Link>
                <Link className='nav_bar__link' to='/about'>About</Link>
            </div>
        </div>
    );
};

export default NavBar;
