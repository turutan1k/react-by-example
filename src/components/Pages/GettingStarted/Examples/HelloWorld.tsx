import React from 'react';
import s from '../../Pages.module.scss';

export default function HelloWorld() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Hello World):</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear" />
                <span>import ReactDOM from 'react-dom</span>
                <div className="clear" />
                <span>
                    ReactDOM.render({`<p>Hello World!</p>`},
                    document.getElementById('root'))
                </span>
            </code>
            <div className={s.pagesResult}>Hello World!</div>
        </div>
    );
}
