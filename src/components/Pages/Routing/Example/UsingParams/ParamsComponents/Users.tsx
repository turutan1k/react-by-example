import React, { FC } from 'react';
import { Database } from '../database';
import { Link } from 'react-router-dom';

export const Users: FC = () => {
    const users = Database.getUsers();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(({ id, name }) => (
                    <li key={id}>
                        <Link to={`user/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
