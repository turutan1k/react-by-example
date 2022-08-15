import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import AboutJSX from '../../Pages/AboutJSX';
import AdvancedHooks from '../../Pages/AdvancedHooks';
import BestPractices from '../../Pages/BestPractices';
import ClassComponents from '../../Pages/ClassComponents';
import Context from '../../Pages/Context';
import CustomHooks from '../../Pages/CustomHooks';
import EventsAndForms from '../../Pages/EventsAndForms';
import FinalWords from '../../Pages/FinalWords';
import FunctionComponents from '../../Pages/FunctionComponents';
import GettingStarted from '../../Pages/GettingStarted';
import HOC from '../../Pages/HOC';
import Hooks from '../../Pages/Hooks';
import Routing from '../../Pages/Routing';
import Styling from '../../Pages/Styling';
import Testing from '../../Pages/Testing';
import s from './Examples.module.scss';
export default function Examples() {
    return (
        <div className={s.ExamplesWrapper}>
            <Routes>
                <Route path="/getting-started" element={<GettingStarted />} />
                <Route path="/about-jsx" element={<AboutJSX />} />
                <Route
                    path="/function-components"
                    element={<FunctionComponents />}
                />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/styling" element={<Styling />} />
                <Route path="/events-and-forms" element={<EventsAndForms />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/context" element={<Context />} />
                <Route path="/advanced-hooks" element={<AdvancedHooks />} />
                <Route path="/custom-hooks" element={<CustomHooks />} />
                <Route path="/routing" element={<Routing />} />
                <Route path="/class-components" element={<ClassComponents />} />
                <Route path="/hoc" element={<HOC />} />
                <Route path="/best-practices" element={<BestPractices />} />
                <Route path="/final-words" element={<FinalWords />} />
            </Routes>
        </div>
    );
}
