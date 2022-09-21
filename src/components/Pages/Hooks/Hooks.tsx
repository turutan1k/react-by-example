import React, { useEffect } from 'react';
import UseStateHook from './Example/UseStateHook';
import UseRefHook from './Example/UseRefHook';
import UseEffectHook from './Example/UseEffectHook';
import UseStateAndUseRefHooks from './Example/UseStateAndUseRefHooks';

export default function Hooks() {
    return (
        <div>
            <UseStateHook />
            <UseRefHook />
            <UseStateAndUseRefHooks/>
            <UseEffectHook />
        </div>
    );
}
