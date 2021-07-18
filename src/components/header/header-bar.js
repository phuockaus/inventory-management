import React from 'react';
import './header-bar.css'

function Header() {    
    return (
        <div className="header">
            Inventory Management
        </div>
    );
    // return React.createElement('div', {className: 'header'}, 'Inventory Management');   
}

export default Header;