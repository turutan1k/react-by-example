import React from 'react';
import { Dropdown } from './ExecutionResult/Dropdown';
import s from '../../Pages.module.scss';

export default function OnClickOutEvent() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (OnClickOutEvent)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, {`}</span>
                <div className="clear" />
                <span>&nbsp;{`FC,`}</span>
                <div className="clear" />
                <span>&nbsp;{`MutableRefObject,`}</span>
                <div className="clear" />
                <span>&nbsp;{`Ref,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useCallback,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useEffect,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useRef,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useState,`}</span>
                <div className="clear" />
                <span>{`} from 'react'`}</span>
                <div className="clear" />
                <span>{`import classes from './example.module.css'`}</span>
                <div className="clear20" />
                <span>{`// #region custom hook`}</span>
                <div className="clear" />
                <span>{`export interface UseClickOut<T extends HTMLElement> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`ref: Ref<T>`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const useClickOut = <T extends HTMLElement>(`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`eventHandler: (event: MouseEvent) => void,`}
                </span>
                <div className="clear" />
                <span>{`): UseClickOut<T> => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const elementRef = useRef() as MutableRefObject<T>`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`// as ref to avoid spamming 'useEffect'`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const handlerRef = useRef<typeof eventHandler>(eventHandler)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`handlerRef.current = eventHandler`}</span>
                <div className="clear" />
                <span>{`useEffect(() => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const filteredHandler = (event: MouseEvent) => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`const clickTarget = event.target as Node`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`const isTargetInsideElement = elementRef.current.contains(clickTarget)`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`if (!isTargetInsideElement) handlerRef.current(event)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`document.addEventListener('click', filteredHandler)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`document.removeEventListener('click', filteredHandler)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`}, [])`}</span>
                <div className="clear" />
                <span>&nbsp;{`return { ref: elementRef }`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`// #endregion`}</span>
                <div className="clear" />
                <span>{`//`}</span>
                <div className="clear" />
                <span>{`// #region using custom hook`}</span>
                <div className="clear" />
                <span>{`interface DropdownProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`title: string`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Dropdown: FC<DropdownProps> = ({ children, title }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const [open, setOpen] = useState(false)`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const toggle = useCallback(() => setOpen((o) => !o), [])`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<div className={classes.container} {...useClickOut(() => setOpen(false))}>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" className={classes.toggle} onClick={toggle}>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`{title} {open ? '🔽' : '🔼'}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`{open && <div className={classes.content}>{children}</div>}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                before dropdown
                <Dropdown title="toggle dropdown">
                    <p>try clicking outside</p>
                    <button type="button">in dropdown</button>
                </Dropdown>
                after dropdown
            </div>
        </div>
    );
}
