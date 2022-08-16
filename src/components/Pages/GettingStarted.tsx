import React, { useEffect, useState } from 'react';
import s from './Pages.module.scss';

export default function GettingStarted() {
    return (
        <div>
            <div className={s.pagesWrapper}>
                <h2 className={s.pagesHeader}>Example 1 (Hello World):</h2>
                <code className={s.pagesExample}>
                    import React from 'react'{`\n`}
                    <br />
                    import ReactDOM from 'react-dom{`\n`}
                    <br />
                    ReactDOM.render({`<p>Hello World!</p>`},
                    document.getElementById('root'))
                </code>
                <div className={s.pagesResult}>Hello World!</div>
            </div>
            <div className={s.pagesWrapper}>
                <h2 className={s.pagesHeader}>Example 2 (Current Time):</h2>
                <code className={s.pagesExample}>
                    import React from 'react'{`\n`}
                    <br />
                    import ReactDOM from 'react-dom{`\n`}
                    <br />
                    {`const app = () => <div> the time is {new Date().toLocaleTimeString()}</div>`}
                    <br />
                    ReactDOM.render(app(), document.getElementById('root'))
                </code>
                <div className={s.pagesResult}>
                    the time is {new Date().toLocaleTimeString()}
                </div>
            </div>
            <div className={s.pagesWrapper}>
                <h2 className={s.pagesHeader}>Example 3 (Clock):</h2>
                <code className={s.pagesExample}>
                    import React from 'react'{`\n`}
                    <br />
                    import ReactDOM from 'react-dom
                    <br />
                    {`const app = () => <div> the time is {new Date().toLocaleTimeString()}</div>`}
                    <br />
                    {`setInterval(()=>{`}
                    <br />
                    &nbsp;ReactDOM.render(app(),
                    document.getElementById('root'))
                    <br />
                    {`}, 1000)`}
                </code>
                <div className={s.pagesResult}></div>
            </div>
        </div>
    );
}
