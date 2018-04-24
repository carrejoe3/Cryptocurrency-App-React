import React from 'react';
import './Favourites.css';
import favIcon from './favourites.png';

class Favourites extends React.Component {
    render() {
        return(
            <img className="favouritesBtn" src={favIcon} />
        );
    }
} 

export default Favourites;