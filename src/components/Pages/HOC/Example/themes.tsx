import React, { FC } from 'react';
import { ThemeContext, ThemeContextType } from './theme-context';

const darkTheme: ThemeContextType = {
    color: {
        background: '#282a36',
        foreground: '#f8f8f2',
    },
};
type DarkThemeProps = {
    children: React.ReactNode;
};
export const DarkTheme = (props: DarkThemeProps) => (
    <ThemeContext.Provider value={darkTheme}>
        {props.children}
    </ThemeContext.Provider>
);
type LightThemeProps = {
    children: React.ReactNode;
};
const lightTheme: ThemeContextType = {
    color: {
        background: '#f8f8f2',
        foreground: '#282a36',
    },
};
export const LightTheme = (props: LightThemeProps) => (
    <ThemeContext.Provider value={lightTheme}>
        {props.children}
    </ThemeContext.Provider>
);
