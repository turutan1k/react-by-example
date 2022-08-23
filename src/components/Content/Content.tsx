import React from 'react';
import Examples from './Examples/Examples';
import Navbar from './Navbar/Navbar';
import s from './Content.module.scss';

export default function Content() {
    return (
        <div className={s.AppContent}>
            <Navbar />
            <Examples />
        </div>
    );
}
