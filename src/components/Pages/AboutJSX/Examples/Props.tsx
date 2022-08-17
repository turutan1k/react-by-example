import React from 'react';
import s from '../../Pages.module.scss';

export default function Props() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Props)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>{`export default <a href="https://reactjs.org">React</a>`}</span>
                <div className="clear" />
                <span>
                    {`export const transpiledTo = React.createElement('a', {href:'https://reactjs.org'}, 'React')`}
                </span>
            </code>
            <a className={s.pagesResult} href="https://reactjs.org">
                React
            </a>
        </div>
    );
}
