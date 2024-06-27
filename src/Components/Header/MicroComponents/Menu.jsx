import React from 'react';
import css from './../Header.module.css'
function Menu(props) {
    return (
        <ul className={css.nav}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    );
}

export default Menu;