import React from 'react';
import s from '../../Pages.module.scss';

export default function SpreadProps() {
    const propsToSpread = {
        onClick: () => alert(`don't click me`),
    };
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 4 (Spread Props)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>{`const propsToSpread = {`}</span>
                <div className="clear" />
                <span>&nbsp;{`onClick: ()=> alert('don't click me!')`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`export default (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<button type="button" {...propsToSpread}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`click me`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`export const transpiledTo = React.createElement('button', {type:'button', ...propsToSpread}), 'click me')`}
                </span>
                <div className="clear" />
                <span>{`)`}</span>
            </code>
            <div className={s.pagesResult}>
                <button
                    style={{
                        cursor: 'pointer',
                    }}
                    type="button"
                    {...propsToSpread}
                    tabIndex={-1}
                >
                    <i>click me</i>
                </button>
            </div>
        </div>
    );
}
