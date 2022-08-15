import React from 'react';
import s from './Navbar.module.scss';
export default function Navbar() {
    return (
        <div className={s.AppNavbar}>
            <h2 className={s.AppNavbarName}>CONTENT:</h2>
            <nav></nav>
        </div>
    );
}
