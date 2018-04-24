import React from 'react';
import './Menu.css';
import Sidebar from './Sidebar';

class Menu extends React.Component {

    constructor() {
        super();

        this.state = {
            showHideSidenav: "closed",
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        let displayState = this.state.showHideSidenav === "closed"? "open": "closed";
        this.setState({ showHideSidenav: displayState});
    };

    toggleSidebar(props) {
        alert('sidebar toggled');
    };

    render() {
        return (
            <div>
                <div id="nav-icon1" onClick={() => this.toggleMenu()} className={this.state.showHideSidenav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Sidebar showHideSidenav={this.state.showHideSidenav}/>
            </div>
        );
    }
}

export default Menu;