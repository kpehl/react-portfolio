import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h2><a href = "/">Home</a></h2>
            {props.children}
            <div className="hero"></div>
        </header>
    );
}

export default Header;