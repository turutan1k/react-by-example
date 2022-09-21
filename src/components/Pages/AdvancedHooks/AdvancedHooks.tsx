import React, { useEffect } from 'react';
import s from './Pages.module.scss';
import UseMemoComponent from './Example/UseMemoComponent';
import UseReducerComponent from './Example/UseReducerComponent';
import UseImperativeHandleComponent from './Example/UseImperativeHandleComponent';

export default function AdvancedHooks() {
    return (
        <>
            <UseMemoComponent />
            <UseReducerComponent />
            <UseImperativeHandleComponent />
        </>
    );
}
