import React, { FC, useState } from 'react';

export const Events: FC = () => {
    const [lastEvent, setLastEvent] = useState('N/A');
    return (
        <div>
            <input
                aria-label="trycopy/pasting"
                defaultValue="try copy/pasting"
                onFocus={() => setLastEvent('onFocus')}
                onBlur={() => setLastEvent('onBlur')}
                onCopy={() => setLastEvent('onCopy')}
                onCut={() => setLastEvent('onCut')}
                onPaste={() => setLastEvent('onPaste')}
                onKeyDown={() => setLastEvent('onKeyDown')}
                onKeyUp={() => setLastEvent('onKeyUp')}
            />
            <pre>last event:&nbsp;{lastEvent}</pre>
        </div>
    );
};
