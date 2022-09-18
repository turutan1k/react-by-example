import React from 'react';
import BuildYourOwnFormik from './Example/BuildYourOwnFormik';
import OnClickOutEvent from './Example/OnClickOutEvent';
import TabsWithKeyboardNavigation from './Example/TabsWithKeyboardNavigation';
import AccordionWithKeyboardNavigation from './Example/AccordionWithKeyboardNavigation';

export default function CustomHooks() {
    return (
        <>
            <BuildYourOwnFormik />
            <OnClickOutEvent />
            <TabsWithKeyboardNavigation />
            <AccordionWithKeyboardNavigation />
        </>
    );
}
