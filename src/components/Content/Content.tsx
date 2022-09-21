import React from 'react';
import Examples from './Examples/Examples';
import Navbar from './Navbar/Navbar';
import s from './Content.module.scss';
import { Outlet } from 'react-router-dom';

export default function Content() {
    return (
        <div className={s.AppContent}>
            <Navbar />
            <Examples />
        </div>
    );
}
