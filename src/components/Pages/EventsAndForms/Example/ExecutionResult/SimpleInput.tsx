import React, { ChangeEvent, FC, useState } from 'react';

export const SimpleInput: FC = () => {
    const [value, setValue] = useState('default value');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <div>
            <label>
                &nbsp;simple input
                <input type="text" value={value} onChange={onChange}></input>
            </label>
            <pre>{value}</pre>
            <button type="button" onClick={() => setValue('new value')}>
                change to new value
            </button>
        </div>
    );
};
