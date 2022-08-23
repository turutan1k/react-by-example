import React from 'react';
import s from '../../Pages.module.scss';
import { SimpleFormik } from './ExecutionResult/SimpleFormik';

export default function Formik() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 4 (Simple formik)</h2>
            <code className={s.pagesExample}>
                <span>{`import { Field, FieldProps, Form, Formik } from 'formik'`}</span>
                <div className="clear" />
                <span>{`import React, { FC } from 'react'`}</span>
                <div className="clear" />
                <span>{`import { UserAPI } from './user-api'`}</span>
                <div className="clear20" />
                <span>{`export const SimpleFormik: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<Formik`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`initialValues={{`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`username: '',`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`password: '',`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`terms: false,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`submitted: false,`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`}}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`onSubmit={async ({ username, password }, { setFieldValue }) => {`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`setFieldValue('submitted', true)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`try {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`await UserAPI.register({ username, password })`}
                </span>
                <div className="clear" />
                <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`// redirect to profile`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} catch {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`// show error`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`}}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Form aria-label="registration form">`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Username`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Field name="username" />`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Password`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<Field type="password" name="password" />`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Field type="checkbox" name="terms" />`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<span>I have read the Terms and Conditions</span>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<button type="submit">Register</button>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<Field>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{({ form }: FieldProps) => (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<pre>{JSON.stringify(form.values, null, '  ')}</pre>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</Field>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</Form>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</Formik>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                <SimpleFormik />
            </div>
        </div>
    );
}
