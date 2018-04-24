import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Search from './Search';
import Favourites from './Favourites';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="logo" className="Header-logo"/>
            </Link>

            <Search />
            <Menu />
            <Favourites />
        </div>
    );
}

export default Header;