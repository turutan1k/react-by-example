import React, { createContext, FC, useContext, useState } from 'react';
import defaultClasses from '../ContextStyle/button.default.module.css';
import greenClasses from '../ContextStyle/button.green.module.css';
import redClasses from '../ContextStyle/button.red.module.css';
import s from '../../Pages.module.scss';

export default function DynamicTheme() {
    type ThemeContextType = 'default' | 'green' | 'red';
    type ThemeSwitcherProps = {
        children: React.ReactNode;
    };
    const ThemeContext = createContext<ThemeContextType>('default');
    const Button: FC = () => {
        const theme = useContext(ThemeContext);
        const classes = {
            default: defaultClasses,
            red: redClasses,
            green: greenClasses,
        }[theme];

        return (
            <button type="button" className={classes.button}>
                theme button
            </button>
        );
    };
    const ThemeSwitcher = (props: ThemeSwitcherProps) => {
        const [theme, setTheme] = useState('default');
        return (
            <>
                <label>
                    theme
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option>default</option>
                        <option>red</option>
                        <option>green</option>
                    </select>
                </label>
                <div className="clear20" />
                <ThemeContext.Provider value={theme as ThemeContextType}>
                    {props.children}
                </ThemeContext.Provider>
            </>
        );
    };
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (DynamicTheme)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { createContext, FC, useContext, useState } from 'react'`}</span>
                <div className="clear" />
                <span>{`import defaultClasses from './button.default.module.css'`}</span>
                <div className="clear" />
                <span>{`import greenClasses from './button.green.module.css'`}</span>
                <div className="clear" />
                <span>{`import redClasses from './button.red.module.css'`}</span>
                <div className="clear20" />
                <span>{`export type ThemeContextType = 'default' | 'red' | 'green'`}</span>
                <div className="clear" />
                <span>{`export const ThemeContext = createContext<ThemeContextType>('default')`}</span>
                <div className="clear" />
                <span>{`export const Button: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const theme = useContext(ThemeContext)`}</span>
                <div className="clear" />
                <span>&nbsp;{`const classes = {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`default: defaultClasses,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`red: redClasses,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`green: greenClasses,`}</span>
                <div className="clear" />
                <span>&nbsp;{`}[theme]`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`<button type="button" className={classes.button}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`themed button`}</span>
                <div className="clear" />
                <span>&nbsp;{`</button>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const ThemeSwitcher: FC = ({ children }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const [theme, setTheme] = useState('default')`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`theme`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<select value={theme} onChange={(e) => setTheme(e.target.value)}>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<option>default</option>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<option>red</option>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<option>green</option>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</select>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<br />`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<ThemeContext.Provider value={theme as ThemeContextType}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`{children}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</ThemeContext.Provider>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`export default (`}</span>
                <div className="clear" />
                <span>&nbsp;{`<ThemeSwitcher>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<Button />`}</span>
                <div className="clear" />
                <span>&nbsp;{`</ThemeSwitcher>`}</span>
                <div className="clear" />
                <span>{`)`}</span>
            </code>
            <div className={s.pagesResult}>
                <ThemeSwitcher>
                    <Button />
                </ThemeSwitcher>
            </div>
        </div>
    );
}
