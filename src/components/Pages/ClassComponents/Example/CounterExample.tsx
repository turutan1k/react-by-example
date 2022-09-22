import s from '../../Pages.module.scss';
import { Counter } from './ExecutionResult/Counter';

export const CounterExample = () => {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Counter Example)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { Component, ReactNode } from 'react'`}</span>
                <div className="clear20" />
                <span>{`export interface CounterProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`defaultValue: number`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`interface CounterState {`}</span>
                <div className="clear" />
                <span>&nbsp;{`value: number`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export class Counter extends Component<CounterProps, CounterState> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`static defaultProps = { defaultValue: 0 }`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`state = { value: this.props.defaultValue }`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`decrement = (): void => this.setState(({ value }) => ({ value: value - 1 }))`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`increment = (): void => this.setState(({ value }) => ({ value: value + 1 }))`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`badIncrement(): void {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`// 'this' is not bound`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`this.setState(({ value }) => ({ value: value + 1 }))`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`render = (): ReactNode => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const { value } = this.state`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={this.decrement}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`-`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<span> {value} </span>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={this.increment}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`+`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div
                className={s.pagesResult}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                default Counter:
                <Counter />
                Counter with default value 5:
                <Counter defaultValue={5} />
            </div>
        </div>
    );
};
