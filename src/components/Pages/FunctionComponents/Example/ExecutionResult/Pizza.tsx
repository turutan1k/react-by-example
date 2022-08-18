import React, { FC, useState } from 'react';

export const Pizza: FC = () => {
    const [topping, setTopping] = useState('');
    return (
        <div>
            <p style={{ paddingBottom: '5px' }}>Choose a pizza toping:</p>
            <div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '5px' }}>
                    <button
                        type="button"
                        onClick={() => setTopping('tomato sause')}
                    >
                        tomato sauce
                    </button>
                </div>
                <div style={{ paddingRight: '5px' }}>
                    <button
                        type="button"
                        onClick={() => setTopping('bbq sauce')}
                    >
                        bbq sauce
                    </button>
                </div>
                <div style={{ paddingRight: '5px' }}>
                    <button
                        type="button"
                        onClick={() => setTopping('garlic sauce')}
                    >
                        garlic sauce
                    </button>
                </div>
            </div>
            <p style={{ paddingTop: '5px' }}>Chosen topping - &nbsp;{topping}</p>
        </div>
    );
};
