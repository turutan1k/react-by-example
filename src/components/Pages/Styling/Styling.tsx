import React, { useEffect } from 'react';
import s from './Pages.module.scss';
import GlobalCSS from './Example/GlobalCSS';
import CSSinJS from './Example/CSSinJS';
import CSSModules from './Example/CSSModules';

export default function Styling() {
    return (
        <>
            <GlobalCSS />
            <CSSModules />
            <CSSinJS />
        </>
    );
}
