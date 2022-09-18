import React, { createContext, FC, useContext, useState } from 'react';
import s from '../../Pages.module.scss';
import { Fib } from './ExecutionResult/Fib';

export default function UseMemoComponent() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (UseMemo)</h2>
            <h2 className={s.pagesHeaderSub}>
                Мемоизация - сохраняет резултат выполнения функции, чтобы в
                последующем выполнять ее тогда, когда это необходимо
            </h2>
            <h2 className={s.pagesHeaderSub}>
                useCallback используется для мемоизации коллбеков в компонентах,
                а useMemo используется для мемоизации значений
            </h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, useMemo } from 'react'`}</span>
                <div className="clear20" />
                <span>{`const fib = (n: number): number => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`if (n <= 2) return 1`}</span>
                <div className="clear" />
                <span>&nbsp;{`return fib(n - 1) + fib(n - 2)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Fib: FC<{ n: number }> = ({ n }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const f = useMemo(() => fib(n), [n])`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<pre>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{n}-th fibonacci number: {f}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</pre>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <Fib n={10} />
            </div>
        </div>
    );
}
