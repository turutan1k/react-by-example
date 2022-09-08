import React, { createContext, FC, useContext, useEffect } from 'react';
import s from '../../Pages.module.scss';

export default function How() {
    type BoxProps = {
        color: string;
        dashed?: boolean;
        children: React.ReactNode;
    };
    type GreenDashedBoxProps = {
        children: React.ReactNode;
    };
    type ProvidesContextProps = {
        color: string;
        children: React.ReactNode;
    };
    const Box = (props: BoxProps) => (
        <div
            className={s.box}
            style={{
                borderColor: props.color,
                borderStyle: props.dashed ? 'dashed' : 'solid',
            }}
        >
            {props.children}
        </div>
    );
    const GreenDashedBox = (props: GreenDashedBoxProps) => (
        <Box color="#50fa7b" dashed>
            {props.children}
        </Box>
    );
    const Context = createContext<string>('default');
    const ProvidesContext = (props: ProvidesContextProps) => (
        <Box color={props.color}>
            <pre>providing value: `{props.color}`</pre>
            <Context.Provider value={props.color}>
                {props.children}
            </Context.Provider>
        </Box>
    );
    const RendersContext: FC = () => {
        const value = useContext(Context);
        return <pre>using value: `{value}`</pre>;
    };

    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (How?)</h2>
            <code className={s.pagesExample}>
                <div className="clear" />
                <span>{`import React, { createContext, FC, useContext } from 'react'`}</span>
                <div className="clear" />
                <span>{`import classes from './example.module.css'`}</span>
                <div className="clear" />
                <span>{`const Box: FC<{ color: string; dashed?: boolean }> = ({ `}</span>
                <div className="clear" />
                <span>&nbsp;{`color, `} </span>
                <div className="clear" />
                <span>&nbsp;{`dashed, `}</span>
                <div className="clear" />
                <span>&nbsp;{`children, `}</span>
                <div className="clear" />
                <span>{`}) => ( `}</span>
                <div className="clear" />
                <span>&nbsp;{`<div `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`className={classes.box} `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`style={{ borderColor: color, borderStyle: dashed ? 'dashed' : 'solid' }} `}
                </span>
                <div className="clear" />
                <span>&nbsp;{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`{children} `}</span>
                <div className="clear" />
                <span>&nbsp;{`</div> `}</span>
                <div className="clear" />
                <span>{`)`}</span>
                <div className="clear" />
                <span>{`const GreenDashedBox: FC = ({ children }) => ( `}</span>
                <div className="clear" />
                <span>&nbsp;{`<Box color="#50fa7b" dashed> `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`{children} `}</span>
                <div className="clear" />
                <span>&nbsp;{`</Box> `}</span> <span>{` ) `}</span>
                <div className="clear" />
                <span>{`const Context = createContext<string>('default') `}</span>
                <div className="clear" />
                <span>{`const ProvidesContext: FC<{ color: string }> = ({ color, children }) => ( `}</span>
                <div className="clear" />
                <span>&nbsp;{`<Box color={color}> `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`<pre>providing value: '{color}'</pre> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<Context.Provider value={color}>{children}</Context.Provider> `}
                </span>
                <div className="clear" />
                <span>&nbsp;{`</Box> `}</span>
                <div className="clear" />
                <span>{`) `}</span>
                <div className="clear" />
                <span>{`const RendersContext: FC = () => { `}</span>
                <div className="clear" />
                <span>&nbsp;{`const value = useContext(Context) `}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`return <pre>using value: '{value}' </pre> `}
                </span>
                <div className="clear" />
                <span>{`} `}</span>
                <div className="clear" />
                <span>{`export default ( `}</span>
                <div className="clear" />
                <span>&nbsp;{`<> `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`<p>default value is used when there is no provider</p> `}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<RendersContext /> `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{/* default */} `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<ProvidesContext color="#ff5555"> `}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<RendersContext /> `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`{/* #ff5555 */} `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<GreenDashedBox> `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<p>value pierces component boundaries</p> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<RendersContext /> `}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{/* #ff5555 */} `}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<ProvidesContext color="#8be9fd"> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<p>providers can be nested</p> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<p>closest value is used</p> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<RendersContext /> `}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{/* #8be9fd */} `}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</ProvidesContext> `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</GreenDashedBox> `}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</ProvidesContext> `}</span>
                <div className="clear" />
                <span>&nbsp;{`</> `}</span>
                <div className="clear" />
                <span>{`) `}</span>
            </code>
            <div className={s.pagesResult}>
                <p>default value is used when there is no provider</p>
                <RendersContext />
                {/* default */}
                <ProvidesContext color="#ff5555">
                    <RendersContext />
                    {/* #ff5555 */}
                    <GreenDashedBox>
                        <p>value pierces component boundaries</p>
                        <RendersContext />
                        {/* #ff5555 */}
                        <ProvidesContext color="#8be9fd">
                            <p>providers can be nested</p>
                            <p>closest value is used</p>
                            <RendersContext />
                            {/* #8be9fd */}
                        </ProvidesContext>
                    </GreenDashedBox>
                </ProvidesContext>
            </div>
        </div>
    );
}
