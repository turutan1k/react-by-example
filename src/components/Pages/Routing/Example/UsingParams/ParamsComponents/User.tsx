import React, { FC } from 'react';
import { useParams } from 'react-router';
import { Database } from '../database';
import { Link } from 'react-router-dom';

export const User: FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const user = Database.getUserById(userId!);
    const articles = user ? user.articles.map(Database.getArticleById) : [];
    return (
        <div>
            {user ? (
                <div>
                    <h1>Posts from {user.name}</h1>
                    {articles.length ? (
                        <ul>
                            {articles.map((article) => {
                                if (!article) throw new Error();
                                const { title, id } = article;
                                return (
                                    <li key={id}>
                                        <Link to={`article/${id}`}>
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p>{user.name} has no articles</p>
                    )}
                </div>
            ) : (
                <h1>Cannot find user with id {userId}</h1>
            )}
        </div>
    );
};
