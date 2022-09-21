import React, { FC } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import s from '../../../Pages.module.scss';

import Home from './Home';
import Dolor from './LinkComponents/Dolor';
import Ipsum from './LinkComponents/Ipsum';
import Lorem from './LinkComponents/Lorem';
import ReturnButton from './ReturnButton';

export const Simple: FC = () => {
    let path = window.location.pathname;
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Simple)</h2>
            <code className={s.pagesExample}>
                <div className="clear" />
                <span>{`import React, { FC } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { Route, Switch } from 'react-router'`}</span>
                <div className="clear" />
                <span>{`import { Link } from 'react-router-dom'`}</span>
                <div className="clear20" />
                <span>{`export const Simple: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<Switch>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<Route path="/lorem">lorem</Route>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<Route path="/ipsum">ipsum</Route>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<Route path="/dolor">dolor</Route>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<Route path="/">`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<h1>Home</h1>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<li>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to="/lorem">lorem</Link>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<li>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to="/ipsum">ipsum</Link>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<li>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to="/dolor">dolor</Link>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</Route>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</Switch>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <ReturnButton />
                {/* Не делать ссылки через /*/}
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="lorem" element={<Lorem />} />
                    <Route path="ipsum" element={<Ipsum />} />
                    <Route path="dolor" element={<Dolor />} />
                </Routes>
            </div>
        </div>
    );
};
