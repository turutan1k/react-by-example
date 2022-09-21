import React, { useEffect } from 'react';
import s from './Pages.module.scss';
import { Page404 } from './Example/Page404/Page404';
import { UsingParams } from './Example/UsingParams/UsingParams';
import { Simple } from './Example/Simple/Simple';

export default function Routing() {
    return (
        <>
            <Simple />
            <Page404 />
            <UsingParams />
        </>
    );
}
