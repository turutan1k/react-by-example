import React from 'react';
import s from '../../Pages.module.scss';
import { Global } from './ExecutionResult/Global';

export default function GlobalCSS() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Global CSS)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{ FC, useState }`} from 'react';</span>
                <div className="clear" />
                <span>{`import './global.css';`}</span>
                <div className="clear" />
                <span>{`import { Slider } from './Slider';`}</span>
                <div className="clear20" />
                <span>{`export const Global: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const [value, setValue] = useState(100);`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`return (`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div className="global__wrapper">`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<Slider value={value} onChange={setValue} />`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<div className="global__circle" style={{ fontSize:`}`{`$`}
                    {`{value * 0.01}em`}`{`}}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`awesome circle`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
            </code>
            <div className={s.pagesResult}>
                <Global />
            </div>
        </div>
    );
}
