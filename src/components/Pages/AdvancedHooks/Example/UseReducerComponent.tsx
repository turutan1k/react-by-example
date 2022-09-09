import React, { createContext, FC, useContext, useState } from 'react';
import { Counter } from '../../Hooks/Example/ExecutionResult/Counter';
import s from '../../Pages.module.scss';

export default function UseReducerComponent() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (UseReducer)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, Reducer, useCallback, useReducer } from 'react'`}</span>
                <div className="clear20" />
                <span>{`interface State {`}</span>
                <div className="clear" />
                <span>&nbsp;{`count: number`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear20" />
                <span>{`interface IncrementAction {`}</span>
                <div className="clear" />
                <span>&nbsp;{`type: 'increment'`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear20" />
                <span>{`interface DecrementAction {`}</span>
                <div className="clear" />
                <span>&nbsp;{`type: 'decrement'`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear20" />
                <span>{`type Action = IncrementAction | DecrementAction`}</span>
                <div className="clear" />
                <span>{`const reducer: Reducer<State, Action> = (state, action) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`switch (action.type) {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`case 'increment':`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`return { count: state.count + 1 }`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`case 'decrement':`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`return { count: state.count - 1 }`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`default:`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`throw new Error()`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Counter: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [state, dispatch] = useReducer(reducer, { count: 0 })`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const decrement = useCallback(() => dispatch({ type: 'decrement' }), [])`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const increment = useCallback(() => dispatch({ type: 'increment' }), [])`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`Count: {state.count}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={decrement}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`-`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={increment}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`+`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <Counter />
            </div>
        </div>
    );
}
