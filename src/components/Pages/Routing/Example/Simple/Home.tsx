import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="lorem">lorem</Link>
                </li>
                <li>
                    <Link to="ipsum">ipsum</Link>
                </li>
                <li>
                    <Link to="dolor">dolor</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}
