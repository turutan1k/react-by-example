import React from 'react';
import s from '../../Pages.module.scss';

export default function Simple() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Simple)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>{`export default <p>Hello World!</p>`}</span>
                <div className="clear" />
                <span>
                    {`export const transpiledTo = React.createElement('p', {}, 'Hello World!')`}
                </span>
            </code>
            <div className={s.pagesResult}>Hello World!</div>
        </div>
    );
}
