import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {

    return (
        <div className={"sidebarContainer " + props.showHideSidenav}>
            <div className="sidebar">
                <ul>
                    <li>Favourites</li>
                    <li>Donate</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;