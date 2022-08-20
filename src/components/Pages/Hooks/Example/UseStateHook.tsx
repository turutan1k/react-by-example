import React from 'react';
import s from '../../Pages.module.scss';
import { Counter } from './ExecutionResult/Counter';

export default function UseStateHook() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (UseState hook)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{(FC, useState)}`} from 'react';</span>
                <div className="clear20" />
                <span>{`export const Counter: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const [counter, setCounter] = useState(0);`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button style={{ marginRight: '10px', cursor: 'pointer' }} type="button" onClick={() => setCounter(counter - 1)}>-</button>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>{counter}</div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button style={{ marginRight: '10px', cursor: 'pointer' }} type="button" onClick={() => setCounter(counter - 1)}>-</button>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
            </code>
            <div className={s.pagesResult}>
                <Counter />
            </div>
        </div>
    );
}
