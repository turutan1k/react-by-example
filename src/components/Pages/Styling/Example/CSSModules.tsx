import React from 'react';
import s from '../../Pages.module.scss';
import { Module } from './ExecutionResult/Module';

export default function CSSModules() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (CSS Modules)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{ FC, useState }`} from 'react';</span>
                <div className="clear" />
                <span>{`import s from './global.module.css';`}</span>
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
                <span>&nbsp;&nbsp;{`<div className={s.global__wrapper}>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<Slider value={value} onChange={setValue} />`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<div className={s.global__circle} style={{ fontSize:`}`
                    {`$`}
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
                <Module />
            </div>
        </div>
    );
}
