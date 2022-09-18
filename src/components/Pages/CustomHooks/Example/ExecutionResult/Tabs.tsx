import React, { FC, ReactNode, useCallback, useState } from 'react';
import s from '../../../Pages.module.scss';
import {
    NavigationContextProvider,
    useNavigation,
} from './NavigationContextProvider';

export interface Tab {
    id: string;
    title: string;
    content: ReactNode;
}

interface InternalTabButtonProps {
    activeTabId: string;
    setActiveTabId: (id: string) => void;
    tab: Tab;
}

const InternalTabButton: FC<InternalTabButtonProps> = ({
    activeTabId,
    setActiveTabId,
    tab: { id, title },
}) => {
    const isActive = activeTabId === id;
    return (
        <button
            type="button"
            className={s.button}
            onClick={useCallback(
                () => setActiveTabId(id),
                [setActiveTabId, id]
            )}
            {...useNavigation()}
        >
            {isActive ? '> ' : ''}
            {title}
        </button>
    );
};

export interface TabsProps {
    defaultTabId?: string;
    tabs: Tab[];
}

export const Tabs: FC<TabsProps> = ({ defaultTabId, tabs }) => {
    const [{ id: firstTabId }] = tabs;
    const [activeTabId, setActiveTabId] = useState(defaultTabId ?? firstTabId);
    const tabButtons = tabs.map((tab) => (
        <InternalTabButton
            key={tab.id}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
            tab={tab}
        />
    ));

    const [activeTab] = tabs.filter(({ id }) => id === activeTabId);
    return (
        <div>
            <div>
                <NavigationContextProvider>
                    {tabButtons}
                </NavigationContextProvider>
            </div>
            <div>{activeTab.content}</div>
        </div>
    );
};

export const tabs = [
    { id: 'hello', title: 'Hello', content: <p>hello</p> },
    { id: 'world', title: 'World', content: <p>world</p> },
    { id: 'tabs', title: 'Tabs', content: <p>tabs</p> },
    { id: 'example', title: 'Example', content: <p>example</p> },
];
