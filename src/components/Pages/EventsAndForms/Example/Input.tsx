import React from 'react';
import s from '../../Pages.module.scss';
import { Events } from './ExecutionResult/Events';

export default function Input() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Simple input)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { ChangeEvent, FC, useState } from 'react';`}</span>
                <div className="clear20" />
                <span>{`export const SimpleInput: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [value, setValue] = useState('default value');`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const onChange = (e: ChangeEvent<HTMLInputElement>) => {`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`setValue(e.target.value);`}</span>
                <div className="clear" />
                <span>&nbsp;{`};`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`simple input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<input type="text" value={value} onChange={onChange}></input>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<pre>{value}</pre>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={() => setValue('new value')}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`change to new value`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                <Events />
            </div>
        </div>
    );
}
