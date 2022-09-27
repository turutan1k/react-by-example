import React from 'react';
import { ListResult, items } from './ExecutionResult/ListResult';
import s from './../../Pages.module.scss';
export default function List() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (List)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, {`}</span>
                <div className="clear" />
                <span>&nbsp;{`createContext,`}</span>
                <div className="clear" />
                <span>&nbsp;{`CSSProperties,`}</span>
                <div className="clear" />
                <span>&nbsp;{`FC,`}</span>
                <div className="clear" />
                <span>&nbsp;{`ReactNode,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useContext,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useMemo,`}</span>
                <div className="clear" />
                <span>{`} from 'react'`}</span>
                <div className="clear" />
                <span>{`export interface GlobalContextType {`}</span>
                <div className="clear" />
                <span>&nbsp;{`theme: 'dark' | 'light'`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const GlobalContext = createContext<GlobalContextType>({ theme: 'dark' })`}</span>
                <div className="clear" />
                <span>{`export const WithGlobal: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const { theme } = useContext(GlobalContext)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const style = useMemo(`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`(): CSSProperties => ({ color: theme === 'dark' ? '#f8f8f2' : '#282a36' }),`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`[theme],`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`return <div style={style}>children</div>`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const LocalContext = createContext<{ index: number }>(null!)`}</span>
                <div className="clear" />
                <span>{`export const List: FC<{ items: ReactNode[] }> = ({ items }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{items.map((item, index) => (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<LocalContext.Provider key={Math.random()} value={{ index }}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{item}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`</LocalContext.Provider>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const NumberedItem: FC = ({ children }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const { index } = useContext(LocalContext)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`({index + 1}) {children}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</li>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const UnnumberedItem: FC = ({ children }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return <li>{children}</li>`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const items = [`}</span>
                <div className="clear" />
                <span>&nbsp;{`<UnnumberedItem>hello</UnnumberedItem>,`}</span>
                <div className="clear" />
                <span>&nbsp;{`<UnnumberedItem>world</UnnumberedItem>,`}</span>
                <div className="clear" />
                <span>&nbsp;{`<NumberedItem>hello</NumberedItem>,`}</span>
                <div className="clear" />
                <span>&nbsp;{`<NumberedItem>world</NumberedItem>,`}</span>
                <div className="clear" />
                <span>{`]`}</span>
            </code>
            <div className={s.pagesResult}>
                <ListResult items={items} />
            </div>
        </div>
    );
}
