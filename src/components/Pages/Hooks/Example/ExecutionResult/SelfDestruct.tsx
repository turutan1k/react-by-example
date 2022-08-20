import React, { FC, useState, useRef } from 'react';

export const SelfDestruct: FC = () => {
    const [destroyed, setDestroyed] = useState(false);
    const timeoutRef = useRef<number>();

    const cancel = () => {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
    };
    const start = () => {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
            setDestroyed(true);
        }, 2000);
    };
    return destroyed ? null : (
        <>
            <button
                style={{
                    padding: '5px',
                    marginRight: '5px',
                    cursor: 'pointer',
                }}
                type="button"
                onClick={start}
            >
                start destroy message
            </button>
            <button
                style={{ padding: '5px', marginLeft: '5px', cursor: 'pointer' }}
                onClick={cancel}
            >
                cancel destroy message
            </button>
            <p>This message will destroy itself in 2 sec</p>
        </>
    );
};
