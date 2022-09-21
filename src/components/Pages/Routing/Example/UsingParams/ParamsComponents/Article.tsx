import React, { FC } from 'react';
import { useParams } from 'react-router';
import { Database } from '../database';
import { Link } from 'react-router-dom';

export const Article: FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const article = Database.getArticleById(parseInt(articleId!));
    const user = article && Database.getUserById(article.owner);

    return (
        <div>
            {user && article ? (
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    <Link to={`user/${user.id}`}>
                        <i>by {user.name}</i>
                    </Link>
                </div>
            ) : (
                <h1>Cannot find article</h1>
            )}
        </div>
    );
};
