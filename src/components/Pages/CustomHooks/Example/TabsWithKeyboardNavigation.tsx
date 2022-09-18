import React from 'react';
import s from '../../Pages.module.scss';
import { Tabs, tabs } from './ExecutionResult/Tabs';

export default function TabsWithKeyboardNavigation() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>
                Example 3 (Tabs With Keyboard Navigation)
            </h2>
            <code className={s.pagesExample}>
                <div className="clear" />
                <span>{`import React, { FC, ReactNode, useCallback, useState } from 'react'`}</span>
                <div className="clear" />
                <span>{`import classes from './example.module.css'`}</span>
                <div className="clear" />
                <span>{`import { NavigationContextProvider, useNavigation } from './navigation'`}</span>
                <div className="clear20" />
                <span>{`export interface Tab {`}</span>
                <div className="clear" />
                <span>&nbsp;{`id: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`title: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`content: ReactNode`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`interface InternalTabButtonProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`activeTabId: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`setActiveTabId: (id: string) => void`}</span>
                <div className="clear" />
                <span>&nbsp;{`tab: Tab`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const InternalTabButton: FC<InternalTabButtonProps> = ({`}</span>
                <div className="clear" />
                <span>&nbsp;{`activeTabId,`}</span>
                <div className="clear" />
                <span>&nbsp;{`setActiveTabId,`}</span>
                <div className="clear" />
                <span>&nbsp;{`tab: { id, title },`}</span>
                <div className="clear" />
                <span>{`}) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const isActive = activeTabId === id`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`type="button"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`className={classes.button}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`onClick={useCallback(() => setActiveTabId(id), [setActiveTabId, id])}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{...useNavigation()}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{isActive ? '> ' : ''}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`{title}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export interface TabsProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`defaultTabId?: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`tabs: Tab[]`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Tabs: FC<TabsProps> = ({ defaultTabId, tabs }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const [{ id: firstTabId }] = tabs`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [activeTabId, setActiveTabId] = useState(defaultTabId ?? firstTabId)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const tabButtons = tabs.map((tab) => (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<InternalTabButton`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`key={tab.id}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`activeTabId={activeTabId}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`setActiveTabId={setActiveTabId}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`tab={tab}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;{`))`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const [activeTab] = tabs.filter(({ id }) => id === activeTabId)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{` return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<NavigationContextProvider>{tabButtons}</NavigationContextProvider>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<div>{activeTab.content}</div>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`const tabs = [`}</span>
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
                    {`{ id: 'tabs', title: 'Tabs', content: <p>tabs</p> },`}
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
                    focus a tab, then use arrow keys to navigate between them
                    <br />
                    <input placeholder="focus this, press tab" />
                </label>
                <Tabs defaultTabId="tabs" tabs={tabs} />
            </div>
        </div>
    );
}
