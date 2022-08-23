import React, { FC, useState } from 'react';
import { UserAPI } from './user-api';

export const SimpleForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return (
        <form
            aria-label="registration-form"
            onSubmit={async (event) => {
                event.preventDefault(); //предотвращение перезагрузки
                setSubmitted(true);
                try {
                    await UserAPI.register({ username, password });
                } catch {
                    console.log('Can not register');
                }
            }}
        >
            <div>
                <label>
                    Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                    <span>&nbsp;I have read the Terms and Conditions</span>
                </label>
            </div>
            <button type="submit">Register</button>
            <pre>
                {JSON.stringify(
                    { username, password, terms, submitted },
                    null,
                    ''
                )}
            </pre>
        </form>
    );
};
