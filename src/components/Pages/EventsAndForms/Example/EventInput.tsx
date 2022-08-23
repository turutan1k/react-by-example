import React from 'react';
import s from '../../Pages.module.scss';
import { Events } from './ExecutionResult/Events';

export default function EventInput() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Events)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, useState } from 'react';`}</span>
                <div className="clear20" />
                <span>{`export const Events: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;const [lastEvent, setLastEvent] = useState('N/A');
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;aria-label="trycopy/pasting"
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`defaultValue="try copy/pasting"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onFocus={() => setLastEvent('onFocus')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onBlur={() => setLastEvent('onBlur')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onCopy={() => setLastEvent('onCopy')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onCut={() => setLastEvent('onCut')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onPaste={() => setLastEvent('onPaste')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onKeyDown={() => setLastEvent('onKeyDown')}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onKeyUp={() => setLastEvent('onKeyUp')}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<pre>last event:&nbsp;{lastEvent}</pre>`}
                </span>
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
