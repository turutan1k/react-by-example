import React from 'react';
import s from '../../Pages.module.scss';
import { Accordion, items } from './ExecutionResult/Accordion';

export default function AccordionWithKeyboardNavigation() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>
                Example 4 (AccordionWithKeyboardNavigation)
            </h2>
            <code className={s.pagesExample}>
                <div className="clear" />
                <span>{`import React, { FC, ReactNode, useCallback, useState } from 'react'`}</span>
                <div className="clear" />
                <span>{`import classes from './example.module.css'`}</span>
                <div className="clear" />
                <span>{`import { NavigationContextProvider, useNavigation } from './navigation'`}</span>
                <div className="clear20" />
                <span>{`export interface AccordionItem {`}</span>
                <div className="clear" />
                <span>&nbsp;{`id: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`title: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`content: ReactNode`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`interface InternalAccordionItemProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`activeItemIds: Set<string>`}</span>
                <div className="clear" />
                <span>&nbsp;{`toggle: (id: string) => void`}</span>
                <div className="clear" />
                <span>&nbsp;{`item: AccordionItem`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const InternalAccordionItem: FC<InternalAccordionItemProps> = ({`}</span>
                <div className="clear" />
                <span>&nbsp;{`activeItemIds,`}</span>
                <div className="clear" />
                <span>&nbsp;{`toggle,`}</span>
                <div className="clear" />
                <span>&nbsp;{`item: { id, title, content },`}</span>
                <div className="clear" />
                <span>{`}) => {`}</span>
                <div className="clear" />
                <span>{`const isActive = activeItemIds.has(id)`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`type="button"`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`className={classes.button}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`onClick={useCallback(() => toggle(id), [toggle, id])}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`{...useNavigation()}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`{isActive ? '🔽' : '🔼'} {title}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`{isActive && <div>{content}</div>}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export interface AccordionProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`items: AccordionItem[]`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Accordion: FC<AccordionProps> = ({ items }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [activeItemIds, setActiveItemIds] = useState(new Set<string>())`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;{`const toggle = useCallback((id: string) => {`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`setActiveItemIds((current) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`const nextItemIds = new Set(current)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`if (nextItemIds.has(id)) {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`nextItemIds.delete(id)`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`} else {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`nextItemIds.add(id)`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return nextItemIds`}</span>
                <div className="clear" />
                <span>&nbsp;{`})`}</span>
                <div className="clear" />
                <span>&nbsp;{`}, [])`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<NavigationContextProvider>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`{items.map((item) => (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<InternalAccordionItem`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`key={item.id}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`activeItemIds={activeItemIds}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`toggle={toggle}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`item={item}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</NavigationContextProvider>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const items = [`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`{ id: 'hello', title: 'Hello', content: <p>hello</p> },`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`{ id: 'world', title: 'World', content: <p>world</p> },`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`{ id: 'accordion', title: 'Accordion', content: <p>accordion</p> },`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`{ id: 'example', title: 'Example', content: <p>example</p> },`}
                </span>
                <div className="clear" />
                <span>{`]`}</span>
            </code>
            <div className={s.pagesResult}>
                <label>
                    use arrow keys to navigate between items
                    <br />
                    <input placeholder="focus this, press tab" />
                </label>
                <Accordion items={items} />
            </div>
        </div>
    );
}
