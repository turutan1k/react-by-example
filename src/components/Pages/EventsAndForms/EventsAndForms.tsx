import React, { useEffect } from 'react';
import EventInput from './Example/EventInput';
import Input from './Example/Input';
import Form from './Example/Form';
import Formik from './Example/Formik';

export default function EventsAndForms() {
    useEffect(() => {
        document.title = 'Events and Forms | React by example';
    }, []);
    return (
        <>
            <EventInput />
            <Input />
            <Form />
            <Formik />
        </>
    );
}
