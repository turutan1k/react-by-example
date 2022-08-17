import React from 'react';
import s from '../../Pages.module.scss';

export default function Interpolate() {
    const hi = 'hi';
    const canYouSeeMe = false;
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 5 (Interpolate)</h2>
            <code className={s.pagesExample}>
                <span>import React from 'react'</span>
                <div className="clear20" />
                <span>const hi = 'hi'</span>
                <div className="clear" />
                <span>const canYouSeeMe = false</span>
                <div className="clear" />
                <span>export default {`(`}</span>
                <div className="clear" />
                <span>&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;string:&nbsp;{`{'hi'}`} {`</br>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;number:&nbsp;{`{42}`} {`</br>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;boolean:&nbsp;{`{true}`}
                    {`{false}`} {`</br>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;short-circuit:&nbsp;{' '}
                    {`{canYouSeeMe && <p>sure you can</p>}`} {`</br>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;nullish:&nbsp;{`{undefined}`}
                    {`{null}`} {`</br>`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>{`)`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                string:&nbsp;{hi}
                <br />
                number:&nbsp;{42}
                <br />
                boolean:&nbsp;{true}
                <br />
                {/* Не выводит sure you can, потому что && возвращает true, только если 2 значения true */}
                short-circuit:&nbsp;{canYouSeeMe && <p>sure you can</p>}
                <br />
                nullish:{undefined}&nbsp;{null}
                <br />
            </div>
        </div>
    );
}
