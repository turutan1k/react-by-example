import React from 'react';
import s from '../../Pages.module.scss';

export default function Repeat() {
    const fruits = ['apple', 'orange', 'strawberry'];
    let outputFruits = fruits.map((fruit) => {
        return <li key={fruit}>{fruit}</li>;
    });
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 6 (Repeat)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>
                    const fruits = {`['apple', 'orange', 'strawberry']`}
                </span>
                <div className="clear" />
                <span>export default {`(`}</span>
                <div className="clear" />
                <span>&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`fruits.map((fruit)=>{`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<li key={fruit}>{fruit}</li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>
                    <div className="clear" />
                    <span>&nbsp;{`</ul>`}</span>
                </span>
                <div className="clear" />
                <span>{`)`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>{outputFruits}</div>
        </div>
    );
}
