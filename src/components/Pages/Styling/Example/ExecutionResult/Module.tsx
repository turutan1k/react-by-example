import React, { FC, useState } from 'react';
import s from './global.module.css';
import { Slider } from './Slider';

export const Module: FC = () => {
    const [value, setValue] = useState(100);
    return (
        <div className={s.global__wrapper}>
            <Slider value={value} onChange={setValue} />
            <div
                className={s.global__circle}
                style={{ fontSize: `${value * 0.01}em` }}
            >
                awesome circle
            </div>
        </div>
    );
};
