import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { UserAPI } from './user-api';

export const SimpleFormik: FC = () => {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                terms: false,
                submitted: false,
            }}
            onSubmit={async ({ username, password }, { setFieldValue }) => {
                setFieldValue('submitted', true);
                try {
                    await UserAPI.register({ username, password });
                } catch {
                    console.log('error formik submit');
                }
            }}
        >
            <Form aria-label="registration form">
                <div>
                    <label>
                        Username:&nbsp;
                        <Field name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password:&nbsp;
                        <Field type="password" name="password" />
                    </label>
                </div>
                <div>
                    <label>
                        <Field type="checkbox" name="terms" />
                        <span>I have read the Terms and Conditions</span>
                    </label>
                </div>
                <button type="submit">Register</button>
                <Field>
                    {({ form }: FieldProps) => (
                        <pre>{JSON.stringify(form.values, null, '')}</pre>
                    )}
                </Field>
            </Form>
        </Formik>
    );
};
