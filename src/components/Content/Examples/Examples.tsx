import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutJSX from '../../Pages/AboutJSX/AboutJSX';
import AdvancedHooks from '../../Pages/AdvancedHooks/AdvancedHooks';
import BestPractices from '../../Pages/BestPractices';
import ClassComponents from '../../Pages/ClassComponents/ClassComponents';
import Context from '../../Pages/Context/Context';
import CustomHooks from '../../Pages/CustomHooks/CustomHooks';
import EventsAndForms from '../../Pages/EventsAndForms/EventsAndForms';
import FinalWords from '../../Pages/FinalWords';
import FunctionComponents from '../../Pages/FunctionComponents/FunctionComponents';
import GettingStarted from '../../Pages/GettingStarted/GettingStarted';
import HOC from '../../Pages/HOC';
import Hooks from '../../Pages/Hooks/Hooks';
import Routing from '../../Pages/Routing/Routing';
import Styling from '../../Pages/Styling/Styling';
import Testing from '../../Pages/Testing/Testing';
import s from './Examples.module.scss';
import Home from './../../Pages/Home';
export default function Examples() {
    return (
        <div className={s.ExamplesWrapper}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="getting-started" element={<GettingStarted />} />
                <Route path="about-jsx" element={<AboutJSX />} />
                <Route
                    path="function-components"
                    element={<FunctionComponents />}
                />
                <Route path="hooks" element={<Hooks />} />
                <Route path="styling" element={<Styling />} />
                <Route path="events-and-forms" element={<EventsAndForms />} />
                <Route path="testing" element={<Testing />} />
                <Route path="context" element={<Context />} />
                <Route path="advanced-hooks" element={<AdvancedHooks />} />
                <Route path="custom-hooks" element={<CustomHooks />} />
                <Route path="routing/*" element={<Routing />} />
                <Route path="class-components" element={<ClassComponents />} />
                <Route path="hoc" element={<HOC />} />
                <Route path="best-practices" element={<BestPractices />} />
                <Route path="final-words" element={<FinalWords />} />
            </Routes>
        </div>
    );
}
