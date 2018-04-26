import React from 'react';
import './Favourites.css';
import favIcon from './favourites.png';

const Favourites = ({onClick}) => {
    return(
        <img onClick={onClick} className="favouritesBtn" src={favIcon} alt="Favourites" />
    );
}

export default Favourites;