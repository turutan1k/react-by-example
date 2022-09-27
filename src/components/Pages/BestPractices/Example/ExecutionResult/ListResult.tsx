import React, {
    createContext,
    CSSProperties,
    FC,
    ReactNode,
    useContext,
    useMemo,
} from 'react';

export interface GlobalContextType {
    theme: 'light' | 'dark';
}

export const GlobalContext = createContext<GlobalContextType>({
    theme: 'dark',
});

export const WithGlobal: FC = () => {
    const { theme } = useContext(GlobalContext);
    const style = useMemo(
        (): CSSProperties => ({
            color: theme === 'dark' ? '#f8f8f2' : '#282a36',
        }),
        [theme]
    );
    return <div style={style}>children</div>;
};

export const LocalContext = createContext<{ index: number }>(null!);

export const ListResult: FC<{ items: ReactNode[] }> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <LocalContext.Provider key={Math.random()} value={{ index }}>
                    {item}
                </LocalContext.Provider>
            ))}
        </ul>
    );
};
type NumberedItem = { children: React.ReactNode };

export const NumberedItem = (props: NumberedItem) => {
    const { index } = useContext(LocalContext);
    return (
        <li>
            ({index + 1}){props.children}
        </li>
    );
};

type UnnumberedItemProps = {
    children: React.ReactNode;
};
export const UnnumberedItem = (props: UnnumberedItemProps) => {
    return <li>{props.children}</li>;
};

export const items = [
    <UnnumberedItem>hello</UnnumberedItem>,
    <UnnumberedItem>world</UnnumberedItem>,
    <NumberedItem>hello</NumberedItem>,
    <NumberedItem>world</NumberedItem>,
];
