import React from 'react';
import s from './../Pages.module.scss';
import ThemeText from './Example/ExecutionResult/ThemeText';
export default function HOC() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (HOC)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { Component, FC, ReactNode } from 'react'`}</span>
                <div className="clear" />
                <span>{`import {`}</span>
                <div className="clear" />
                <span>&nbsp;{`DarkTheme,`}</span>
                <div className="clear" />
                <span>&nbsp;{`LightTheme,`}</span>
                <div className="clear" />
                <span>&nbsp;{`PropsWithTheme,`}</span>
                <div className="clear" />
                <span>&nbsp;{`withTheme,`}</span>
                <div className="clear" />
                <span>{`from './theme-library'} `}</span>
                <div className="clear" />
                <span>{`interface InternalThemedParagraphProps extends PropsWithTheme {`}</span>
                <div className="clear" />
                <span>&nbsp;{`children: ReactNode`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`class InternalThemedParagraph extends Component<InternalThemedParagraphProps> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`componentDidMount = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`// eslint-disable-next-line no-console`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`console.log(this.props.theme)`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`render = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`theme: {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`color: { foreground },`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`},`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`children,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`} = this.props`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`return <p style={{ color: foreground }}>{children}</p>`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const ThemedParagraph = withTheme(InternalThemedParagraph)`}</span>
                <div className="clear" />
                <span>{`interface InternalThemedCardProps extends PropsWithTheme {`}</span>
                <div className="clear" />
                <span>&nbsp;{`children: ReactNode`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`const InternalThemedCard: FC<InternalThemedCardProps> = ({`}</span>
                <div className="clear" />
                <span>&nbsp;{`theme: {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`color: { background },`}</span>
                <div className="clear" />
                <span>&nbsp;{`},`}</span>
                <div className="clear" />
                <span>&nbsp;{`children,`}</span>
                <div className="clear" />
                <span>{`}) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`return <div style={{ backgroundColor: background }}>{children}</div>`}
                </span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const ThemedCard = withTheme(InternalThemedCard)`}</span>
            </code>
            <div className={s.pagesResult}>
                <ThemeText />
            </div>
        </div>
    );
}
