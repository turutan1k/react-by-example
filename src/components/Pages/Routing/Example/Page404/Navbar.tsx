import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Navbar: FC = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <NavLink
                style={{ textDecoration: 'none', marginRight: '10px' }}
                to=""
            >
                Home
            </NavLink>{' '}
            <NavLink
                style={{ textDecoration: 'none', marginRight: '10px' }}
                to="pricing"
            >
                Pricing
            </NavLink>{' '}
            <NavLink
                style={{ textDecoration: 'none', marginRight: '10px' }}
                to="about"
            >
                About
            </NavLink>{' '}
            <NavLink
                style={{ textDecoration: 'none', marginRight: '10px' }}
                to="this-page-does-not-exist"
            >
                Broken Link
            </NavLink>{' '}
            <Outlet />
        </nav>
    );
};
