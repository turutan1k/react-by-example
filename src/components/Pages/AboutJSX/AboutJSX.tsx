import React, { useEffect } from 'react';
import Interpolate from './Examples/Interpolate';
import Props from './Examples/Props';
import PropTypes from './Examples/PropTypes';
import Repeat from './Examples/Repeat';
import Simple from './Examples/Simple';
import SpreadProps from './Examples/SpreadProps';
export default function AboutJSX() {
    useEffect(() => {
        document.title = 'About JSX | React by Example';
    }, []);
    return (
        <>
            <Simple />
            <Props />
            <PropTypes />
            <SpreadProps />
            <Interpolate/>
            <Repeat/>
        </>
    );
}
