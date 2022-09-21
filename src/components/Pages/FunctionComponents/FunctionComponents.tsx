import React, { useEffect } from 'react';
import StatefulComponents from './Example/StatefulComponents';
import StatelessComponents from './Example/StatelessComponents';

export default function FunctionComponents() {
    return (
        <>
            <StatelessComponents />
            <StatefulComponents />
        </>
    );
}
