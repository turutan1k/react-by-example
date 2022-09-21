import React, { useEffect } from 'react';
import s from './Pages.module.scss';
import How from './Example/How';
import DynamicTheme from './Example/DynamicTheme';

export default function Context() {
    return (
        <>
            <How />
            <DynamicTheme />
        </>
    );
}
