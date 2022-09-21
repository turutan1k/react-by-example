import React, { FC } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Database } from '../database';
import { Link } from 'react-router-dom';

export const Article: FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/routing');
    };
    const { articleId } = useParams<{ articleId: string }>();
    const article = Database.getArticleById(Number(articleId));
    const user = article && Database.getUserById(article.owner);
    return (
        <div>
            {user && article ? (
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    <button onClick={handleClick}>by {user.name}</button>
                </div>
            ) : (
                <h1>Cannot find article</h1>
            )}
        </div>
    );
};
