import React, { FC } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import s from '../../../Pages.module.scss';
import {Params} from './Params';

export const UsingParams: FC = () => {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (Using Params)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { Redirect, Route, Switch, useParams } from 'react-router'`}</span>
                <div className="clear" />
                <span>{`import { Link } from 'react-router-dom'`}</span>
                <div className="clear" />
                <span>{`import { Database } from './database'`}</span>
                <div className="clear20" />
                <span>{`export const Article: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const { articleId } = useParams<{ articleId: string }>()`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const article = Database.getArticleById(Number(articleId))`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const user = article && Database.getUserById(article.owner)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{user && article ? (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<h1>{article.title}</h1>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<p>{article.content}</p>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to={'/user/{$}{user.id}'}>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<i>by {user.name}</i>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Link>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`) : (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Cannot find article</h1>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const User: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const { userId } = useParams<{ userId: string }>()`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const user = Database.getUserById(userId)`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const articles = user ? user.articles.map(Database.getArticleById) : []`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{user ? (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<h1>Posts from {user.name}</h1>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{articles.length ? (`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`{articles.map((article) => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`if (!article) throw new Error()`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`const { title, id } = article`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return (`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<li key={id}>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to={'/article/{$}{id}'}>{title}</Link>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`</li>`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`})}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`) : (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<p>{user.name} has no articles</p>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`) : (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<h1>Cannot find user with id {userId}</h1>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Users: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const users = Database.getUsers()`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<h1>Users</h1>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`{users.map(({ id, name }) => (`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<li key={id}>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Link to={'/user/{$}{id}'}>{name}</Link>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</li>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Params: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<Switch>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<Route path="/users">`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<Users />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</Route>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<Route path="/user/:userId">`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<User />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</Route>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;{`<Route path="/article/:articleId">`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<Article />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</Route>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<Route path="/">`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<Redirect to="/users" />`}
                </span>
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
                <Params />
            </div>
        </div>
    );
};
