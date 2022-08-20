import React, { FC, useState } from 'react';

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div style={{ display: 'flex' }}>
            <button style={{ marginRight: '10px', cursor: 'pointer' }} type="button" onClick={() => setCounter(counter - 1)}>-</button>
            <div>{counter}</div>
            <button
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                type="button"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </div>
    );
};
