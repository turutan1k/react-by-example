import React from 'react';
import s from '../../Pages.module.scss';
import { ToggleLocale } from './ExecutionResult/ToggleLocale';
export default function UseStateAndUseRefHooks() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 4 (UseEffect hook)</h2>
            <code className={s.pagesExample}>
                <span>
                    {`import React, { FC, useState, useEffect } from 'react';`}
                </span>
                <div className="clear20" />
                <span>{`export const LocaleClock: FC<{ locale?: string }> = ({ locale = 'en-US' }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [timeString, setTimeString] = useState<string>();`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`useEffect(() => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const update = () => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`setTimeString(new Date().toLocaleTimeString(locale));`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`};`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`update();`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const interval = window.setInterval(update, 500);`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`window.clearInterval(interval);`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`};`}</span>
                <div className="clear" />
                <span>&nbsp;{`}, [locale]);`}</span>
                <div className="clear" />
                <span>&nbsp;{`return <p>{timeString}</p>;`}</span>
                <div className="clear" />
                <span>{`};`}</span>
                <div className="clear" />
                <span>{`export const ToggleLocale: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [locale, setLocale] = useState('en-GB');`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const toggleLocale = () => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`setLocale(locale === 'en-GB' ? 'th-TH-u-nu-thai' : 'en-GB');`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`};`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={toggleLocale}>toggle locale</button>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<LocaleClock locale={locale} />`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                <ToggleLocale />
            </div>
        </div>
    );
}
