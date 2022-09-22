import s from '../../Pages.module.scss';
import { ClassBitcoin } from './ExecutionResult/ClassBitcoin';

export const ClassBitcoinPrice = () => {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Class Bitcoin Price)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { Component, ReactNode } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { BitcoinAPI } from './bitcoin-api'`}</span>
                <div className="clear20" />
                <span>{`export interface BitcoinProps {}`}</span>
                <div className="clear" />
                <span>{`interface BitcoinState {`}</span>
                <div className="clear" />
                <span>&nbsp;{`price: number | null`}</span>
                <div className="clear" />
                <span>&nbsp;{`fiat: 'gbp' | 'usd'`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export class Bitcoin extends Component<BitcoinProps, BitcoinState> {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`state = { price: null, fiat: 'gbp' } as const`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`mounted = false`}</span>
                <div className="clear" />
                <span>&nbsp;{`componentDidMount = (): void => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`this.mounted = true`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`this.updatePrice()`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`componentDidUpdate = (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`prevProps: BitcoinProps,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`prevState: BitcoinState,`}</span>
                <div className="clear" />
                <span>&nbsp;{`): void => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const { fiat } = this.state`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`if (prevState.fiat !== fiat) {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`this.updatePrice()`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`componentWillUnmount = (): void => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`this.mounted = false`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`private setGbp = () => this.setState({ fiat: 'gbp' })`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`private setUsd = () => this.setState({ fiat: 'usd' })`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`private getSymbol = () => ({ gbp: '£', usd: '$' }[this.state.fiat])`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`private updatePrice = async () => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`this.setState({ price: null })`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const { fiat } = this.state`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const value = await BitcoinAPI.getPrice(fiat).catch(() => NaN)`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`if (this.mounted) this.setState({ fiat, price: value })`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`render = (): ReactNode => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const { price } = this.state`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={this.setGbp}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`£`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={this.setUsd}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`$`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<br />`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{price == null ? (`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<span>loading price...</span>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`) : (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<span>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{this.getSymbol()}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{price}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</span>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <ClassBitcoin />
            </div>
        </div>
    );
};
