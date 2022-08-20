import React from 'react';
import s from '../../Pages.module.scss';
import { SelfDestruct } from './ExecutionResult/SelfDestruct';
export default function UseStateAndUseRefHooks() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>
                Example 3 (UseRef and UseState hooks)
            </h2>
            <code className={s.pagesExample}>
                <span>
                    import React, {`{ FC, useState, useRef }`} from 'react';
                </span>
                <div className="clear20" />
                <span>{`export const SelfDestruct: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const [destroyed, setDestroyed] = useState(false);`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const timeoutRef = useRef<number>();`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const cancel = () => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`window.clearTimeout(timeoutRef.current);`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`timeoutRef.current = undefined;`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const start = () => {`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`cancel();`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`timeoutRef.current = window.setTimeout(() => {`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`setDestroyed(true);`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}, 2000);`}</span>
                <div className="clear" />
                <span>&nbsp;{`return destroyed ? null : (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={start}>start destroy message</>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={cancel}>cancel destroy message</>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<p>This message will destroy itself in 2 sec</p>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
            </code>
            <div className={s.pagesResult}>
                <SelfDestruct />
            </div>
        </div>
    );
}
