import React from 'react';
import s from '../../Pages.module.scss';

export default function PropTypes() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (Prop Types)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>
                    {`<button type="button" onClick={()=> alert('Clicked)}> tabIndex={-1}`}
                    <div className="clear" />
                    &nbsp;{`<i>`}Click me!{`<i>`}
                    <div className="clear" />
                    {`</button>`}
                </span>
                <div className="clear" />
                <span>
                    {`export const transpiledTo = React.createElement('button', { type:'button', onClick:()=> alert('Clicked), tabIndex:-1},`}
                    <div className="clear" />
                    {`React.createElement('i', {}, 'click me');`}
                </span>
            </code>
            <div className={s.pagesResult}>
                <button
                    style={{
                        cursor: 'pointer',
                    }}
                    type="button"
                    onClick={() => alert('Clicked')}
                    tabIndex={-1}
                >
                    <i>click me</i>
                </button>
            </div>
        </div>
    );
}
