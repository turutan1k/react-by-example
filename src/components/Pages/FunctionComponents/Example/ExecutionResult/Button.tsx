import React, { FC } from 'react';

//Пример не сработал, тк не было установлено типа для children, ({children})
//any - disable type checking;
export const Button = ({ children }: any) => {
    return <button type="button">{children}</button>;
};
