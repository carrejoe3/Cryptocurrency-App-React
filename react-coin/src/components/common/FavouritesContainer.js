import React from 'react';
import Favourites from './Favourites';

class FavouritesContainer extends React.Component {
    handleClick() {
        alert('hello');
    }

    render() {
        return(
            <div id="favContainer">
                <Favourites onClick={this.handleClick}/>
            </div>
        );
    }
}

export default FavouritesContainer;