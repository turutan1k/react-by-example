import React, { FC } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Users } from './ParamsComponents/Users';
import { User } from './ParamsComponents/User';
import { Article } from './ParamsComponents/Article';

export const Params: FC = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Users />} />
                <Route path="user/:userId" element={<User />} />
                <Route path="article/:articleId" element={<Article />} />
                <Route path="" element={<Navigate to="" replace />} />
            </Routes>
            <Outlet />
        </>
    );
};
