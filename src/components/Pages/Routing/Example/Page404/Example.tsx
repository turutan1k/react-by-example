import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page404Links/HomePage';
import AboutPage from './Page404Links/AboutPage';
import PricingPage from './Page404Links/PricingPage';
import ErrorPage from './Page404Links/ErrorPage';
import { Navbar } from './Navbar';
export const Example: FC = () => {
    return (
        <div>
            <Navbar />
            <article>
                <Routes>
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </article>
        </div>
    );
};
