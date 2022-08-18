import React, { useEffect } from 'react';
import Clock from './Examples/Clock';
import CurrentTime from './Examples/CurrentTime';
import HelloWorld from './Examples/HelloWorld';

export default function GettingStarted() {
    useEffect(() => {
        document.title = 'Getting Started | React by Example';
    }, []);
    return (
        <>
            <HelloWorld />
            <CurrentTime />
            <Clock />
        </>
    );
}
