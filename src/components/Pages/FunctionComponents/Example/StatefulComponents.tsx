import React from 'react';
import s from '../../Pages.module.scss';
import { Pizza } from './ExecutionResult/Pizza';

export default function StatefulComponents() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Stateful components)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{FC, useState}`} from 'react';</span>
                <div className="clear20" />
                <span>export const Pizza: {`FC = ()=> {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const [topping, setTopping] = useState('');`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`return (`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`<div>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<p>Choose a pizza toping:</p>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <span>&nbsp;{`type="button"`}</span>
                <span>
                    &nbsp;{`onClick={() => setTopping('tomato sause')}`}
                </span>
                <span>{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`tomato sauce`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <span>&nbsp;{`type="button"`}</span>
                <span>&nbsp;{`onClick={() => setTopping('bbq sauce')}`}</span>
                <span>{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`bbq sauce`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <span>&nbsp;{`type="button"`}</span>
                <span>
                    &nbsp;{`onClick={() => setTopping('garlic sauce')}`}
                </span>
                <span>{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`garlic sauce`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<p>Chosen topping - &nbsp;{topping}</p>`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                <Pizza />
            </div>
        </div>
    );
}
