import React, { FC } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import s from '../../../Pages.module.scss';
import {Example} from './Example'
export const Page404: FC = () => {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (Page 404)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { NavLink, Route, Switch } from 'react-router-dom'`}</span>
                <div className="clear" />
                <span>{`import classes from './example.module.css'`}</span>
                <div className="clear20" />
                <span>{`export const NavBar: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<nav>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<NavLink to="/" exact activeClassName={classes.activeLink}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`home`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</NavLink>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{' '}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<NavLink to="/pricing" activeClassName={classes.activeLink}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`pricing`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</NavLink>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{' '}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<NavLink to="/about" activeClassName={classes.activeLink}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`about`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</NavLink>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{' '}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<NavLink`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`to="/this-page-does-not-exist"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`activeClassName={classes.activeLink}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`broken link`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</NavLink>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</nav>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Example: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<NavBar />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<article>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<Switch>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Route path="/pricing">pricing page</Route>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Route path="/about">about page</Route>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Route path="/" exact>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`home page`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Route>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Route path="/">404 page</Route>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</Switch>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</article>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
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
};
