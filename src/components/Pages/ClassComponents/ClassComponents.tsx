import React from 'react';
import { CounterExample } from './Example/CounterExample';
import { FuncBitcoinPrice } from './Example/FuncBitcoinPrice';
import { ClassBitcoinPrice } from './Example/ClassBitcoinPrice';

export default function ClassComponents() {
    return (
        <>
            <CounterExample />
            <ClassBitcoinPrice />
            <FuncBitcoinPrice />
        </>
    );
}
