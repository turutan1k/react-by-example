import React, { createContext, FC, useContext, useState } from 'react';
import { Counter } from '../../Hooks/Example/ExecutionResult/Counter';
import s from '../../Pages.module.scss';
import { Example } from './ExecutionResult/Example';

export default function UseImperativeHandleComponent() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (UseImperativeHandle)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, {`}</span>
                <div className="clear" />
                <span>&nbsp;{`FC,`}</span>
                <div className="clear" />
                <span>&nbsp;{`Ref,`}</span>
                <div className="clear" />
                <span>&nbsp;{`RefObject,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useCallback,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useImperativeHandle,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useRef,`}</span>
                <div className="clear" />
                <span>{`} from 'react'`}</span>
                <div className="clear20" />
                <span>{`export interface Focusable {`}</span>
                <div className="clear" />
                <span>&nbsp;{`focus(): void`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const FocusableInput: FC<{ focusable?: Ref<Focusable> }> = ({`}</span>
                <div className="clear" />
                <span>&nbsp;{`focusable,`}</span>
                <div className="clear" />
                <span>&nbsp;{`}) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const inputRef = useRef<HTMLInputElement>(null)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const focus = useCallback(() => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`inputRef.current?.focus()`}</span>
                <div className="clear" />
                <span>&nbsp;{`}, [])`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`useImperativeHandle(focusable, () => ({ focus }), [focus])`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`focusable input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<input ref={inputRef} placeholder="required" />`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Error: FC<{ target: RefObject<Focusable> }> = ({`}</span>
                <div className="clear" />
                <span>&nbsp;{`target,`}</span>
                <div className="clear" />
                <span>&nbsp;{`children,`}</span>
                <div className="clear" />
                <span>{`}) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const onClick = useCallback(() => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`target.current?.focus()`}</span>
                <div className="clear" />
                <span>&nbsp;{`}, [target])`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{children}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={onClick}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`focus field`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const Example: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const focusableRef = useRef<Focusable>(null)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<FocusableInput focusable={focusableRef} />`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<Error target={focusableRef}>this field is required</Error>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <Example />
            </div>
        </div>
    );
}
