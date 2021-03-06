import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Search from './Search';
import FavouritesContainer from './FavouritesContainer';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="logo" className="Header-logo"/>
            </Link>

            <Search />
            <Menu />
            <FavouritesContainer />
        </div>
    );
}

export default Header;