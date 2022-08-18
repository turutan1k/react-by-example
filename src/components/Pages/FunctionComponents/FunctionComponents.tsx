import React, { useEffect } from 'react';
import StatefulComponents from './Example/StatefulComponents';
import StatelessComponents from './Example/StatelessComponents';

export default function FunctionComponents() {
    useEffect(() => {
        document.title = 'Function Components | React by Example';
    }, []);
    return (
        <>
            <StatelessComponents />
            <StatefulComponents />
        </>
    );
}
