import React from 'react';
import s from '../../Pages.module.scss';

export default function CurrentTime() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Current Time):</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear" />
                <span>import ReactDOM from 'react-dom</span>
                <div className="clear" />
                <span>{`const app = () => <div> the time is {new Date().toLocaleTimeString()}</div>`}</span>
                <div className="clear" />
                <span>
                    ReactDOM.render(app(), document.getElementById('root'))
                </span>
            </code>
            <div className={s.pagesResult}>
                the time is {new Date().toLocaleTimeString()}
            </div>
        </div>
    );
}
