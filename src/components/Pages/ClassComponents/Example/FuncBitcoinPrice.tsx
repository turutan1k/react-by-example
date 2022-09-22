import s from '../../Pages.module.scss';
import { FuncBitcoin } from './ExecutionResult/FuncBitcoin';

export const FuncBitcoinPrice = () => {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (Func Bitcoin Price)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { BitcoinAPI } from './bitcoin-api'`}</span>
                <div className="clear20" />
                <span>{`export const Bitcoin: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [fiat, setFiat] = useState<'gbp' | 'usd'>('gbp')`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const setGbp = useCallback(() => setFiat('gbp'), [])`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const setUsd = useCallback(() => setFiat('usd'), [])`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [price, setPrice] = useState<number | null>(null)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`useEffect(() => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`let shouldUpdate = true`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`setPrice(null)`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`BitcoinAPI.getPrice(fiat)`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`.then((v) => shouldUpdate && setPrice(v))`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`.catch(() => shouldUpdate && setPrice(NaN))`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return () => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`shouldUpdate = false`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`}, [fiat])`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const symbol = useMemo(() => ({ gbp: '£', usd: '$' }[fiat]), [fiat])`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={setGbp}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`£`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={setUsd}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`$`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<br />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{price == null ? (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<span>loading price...</span>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`) : (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<span>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{symbol}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{price}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</span>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <FuncBitcoin />
            </div>
        </div>
    );
};
