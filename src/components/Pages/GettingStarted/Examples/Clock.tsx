import React, { useEffect, useState } from 'react';
import s from '../../Pages.module.scss';


export default function Clock() {
    const getTime = () => `the time is ${new Date().toLocaleTimeString()}`;
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (Clock):</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear" />
                <span>import ReactDOM from 'react-dom</span>
                <div className="clear" />
                <span>
                    {`const app = () => <div> the time is {new Date().toLocaleTimeString()}</div>`}
                </span>
                <div className="clear" />
                <span>{`setInterval(()=>{`}</span>
                <div className="clear" />
                <span>
                    &nbsp;ReactDOM.render(app(),
                    document.getElementById('root'))
                </span>
                <br />
                <span>{`}, 1000)`}</span>
            </code>
            <div className={s.pagesResult}>{time}</div>
        </div>
    );
}
