import React from 'react';
import s from '../../Pages.module.scss';
import { DebugForm, Form, Select, Input } from './ExecutionResult/Formik';

export default function BuildYourOwnFormik() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (BuildYourOwnFormik)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, {`}</span>
                <div className="clear" />
                <span>&nbsp;{`ChangeEventHandler,`}</span>
                <div className="clear" />
                <span>&nbsp;{`createContext,`}</span>
                <div className="clear" />
                <span>&nbsp;{`FC,`}</span>
                <div className="clear" />
                <span>&nbsp;{`InputHTMLAttributes,`}</span>
                <div className="clear" />
                <span>&nbsp;{`SelectHTMLAttributes,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useCallback,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useContext,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useState,`}</span>
                <div className="clear" />
                <span>{`} from 'react'n`}</span>
                <div className="clear" />
                <span>{`// #region context`}</span>
                <div className="clear" />
                <span>{`export interface FormContextType {`}</span>
                <div className="clear" />
                <span>&nbsp;{`state: Record<string, string>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`setState: (newState: Record<string, string>) => void`}
                </span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const FormContext = createContext<FormContextType>(null!)`}</span>
                <div className="clear" />
                <span>{`export const DebugForm: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const form = useContext(FormContext)`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`return <pre>{JSON.stringify(form.state, null, '  ')}</pre>`}
                </span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`// #endregion`}</span>
                <div className="clear" />
                <span>{`//`}</span>
                <div className="clear" />
                <span>{`// #region form`}</span>
                <div className="clear" />
                <span>{`export interface FormProps {`}</span>
                <div className="clear" />
                <span>&nbsp;{`initialValues: Record<string, string>`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Form: FC<FormProps> = ({ children, initialValues }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const [state, setState] = useState(initialValues)`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const context: FormContextType = {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`state,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`setState: useCallback(`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`(partial) => setState((current) => ({ ...current, ...partial })),`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`[],`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`),`}</span>
                <div className="clear" />
                <span>&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`<FormContext.Provider value={context}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<form>{children}</form>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</FormContext.Provider>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`// #endregion`}</span>
                <div className="clear" />
                <span>{`//`}</span>
                <div className="clear" />
                <span>{`// #region custom hook`}</span>
                <div className="clear" />
                <span>{`export interface UseForm<Element extends { value: string }> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`value: string`}</span>
                <div className="clear" />
                <span>&nbsp;{`onChange: ChangeEventHandler<Element>`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const useForm = <Element extends { value: string }>(`}</span>
                <div className="clear" />
                <span>&nbsp;{`name: string,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`): UseForm<Element> => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`const form = useContext(FormContext)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`const value = form.state[name]`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const onChange: ChangeEventHandler<Element> = useCallback(`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`(event) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`form.setState({ [name]: event.target.value })`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`},`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`[form, name],`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`return { value, onChange }`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`// #endregion`}</span>
                <div className="clear" />
                <span>{`//`}</span>
                <div className="clear" />
                <span>{`// #region form items using custom hook`}</span>
                <div className="clear" />
                <span>{`export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`name: string`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Input: FC<InputProps> = ({ name, ...props }) => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`return <input {...useForm(name)} {...props} />`}
                </span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {`}</span>
                <div className="clear" />
                <span>&nbsp;{`name: string`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const Select: FC<SelectProps> = ({ name, children, ...props }) => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`<select {...useForm(name)} {...props}>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{children}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</select>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <Form
                    initialValues={{
                        title: 'mr',
                        first: 'Steve',
                        last: 'Buscemi',
                    }}
                >
                    <label>
                        title
                        <Select name="title">
                            <option value="mr">Mr</option>
                            <option value="mrs">Mrs</option>
                            <option value="ms">Ms</option>
                            <option value="dr">Dr</option>
                            <option value="lord">Lord</option>
                            <option value="prof">Prof</option>
                            <option value="esq">Esq</option>
                            <option value="dame">Dame</option>
                            <option value="na">N/A</option>
                        </Select>
                    </label>
                    <div className="clear" />
                    <label>
                        first name
                        <Input name="first" />
                    </label>
                    <div className="clear" />
                    <label>
                        last name
                        <Input name="last" />
                    </label>
                    <DebugForm />
                </Form>
            </div>
        </div>
    );
}
