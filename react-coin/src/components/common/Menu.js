import React from 'react';
import './Menu.css';

class Menu extends React.Component {

    constructor() {
        super();

        this.state = {
            showHideSidenav: "closed",
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        let displayState = this.state.showHideSidenav == "closed"? "open": "closed";
        this.setState({ showHideSidenav: displayState});
    };

    render() {
        return (
            <div id="nav-icon1" onClick={() => this.toggleMenu()} className={this.state.showHideSidenav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default Menu;