import React, {
    ChangeEventHandler,
    createContext,
    FC,
    InputHTMLAttributes,
    SelectHTMLAttributes,
    useCallback,
    useState,
    useContext,
} from 'react';

export interface FormContextType {
    state: Record<string, string>;
    setState: (newState: Record<string, string>) => void;
}

export const FormContext = createContext<FormContextType>(null!);
//компонента DebugDorm, которая выводит данные, записываемые в объект
export const DebugForm: FC = () => {
    const form = useContext(FormContext);
    return <pre>{JSON.stringify(form.state, null, ' ')}</pre>;
};
//свойства для компоненты Form
export interface FormProps {
    initialValues: Record<string, string>;
    children: React.ReactNode;
}
//компонент создания формы, который принимает в себя значение(контекст, и изменяет предыдущее значение на текущее)
export const Form = (props: FormProps) => {
    const [state, setState] = useState(props.initialValues);

    const context: FormContextType = {
        state,
        setState: useCallback(
            (partial) => setState((current) => ({ ...current, ...partial })),
            []
        ),
    };
    return (
        <FormContext.Provider value={context}>
            <form>{props.children}</form>
        </FormContext.Provider>
    );
};

export interface UseForm<Element extends { value: string }> {
    value: string;
    onChange: ChangeEventHandler<Element>;
}

export const useForm = <Element extends { value: string }>(
    name: string
): UseForm<Element> => {
    const form = useContext(FormContext);

    const value = form.state[name];
    const onChange: ChangeEventHandler<Element> = useCallback(
        (event) => {
            form.setState({ [name]: event.target.value });
        },
        [form, name]
    );
    return { value, onChange };
};
//интерфейс Input компонента,содержащий HTMLInputElement(name)
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}
// компонент Input, содержащий name, а также свойства, которые будут записаны в этот input
export const Input: FC<InputProps> = ({ name, ...props }) => {
    return <input {...useForm(name)} {...props} />;
};
//свойства компоненты Select (<HTMLSelectElement> - интерфейс, представляющий собой <select> элемент HTML)
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    children: React.ReactNode;
}
//Компонент Select, принимающий в себя дочерние элементы option со значениями
export const Select: FC<SelectProps> = ({ name, children, ...props }) => {
    return (
        <select {...useForm(name)} {...props}>
            {children}
        </select>
    );
};
