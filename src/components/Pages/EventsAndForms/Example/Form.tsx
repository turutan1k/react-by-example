import React from 'react';
import s from '../../Pages.module.scss';
import { SimpleForm } from './ExecutionResult/SimpleForm';

export default function Form() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (Simple form)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, {(FC, useState)} from 'react' import {UserAPI}{' '} from './user-api'`}</span>
                <div className="clear20" />
                <span>&nbsp;{`export const SimpleForm: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`const [password, setPassword] = useState('')`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`const [username, setUsername] = useState('')`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`const [terms, setTerms] = useState(false)`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const [submitted, setSubmitted] = useState(false)`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<form`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`aria-label="registration form"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`onSubmit={async (event) => {`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`event.preventDefault()`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`setSubmitted(true)`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`try {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`await UserAPI.register({ username, password })`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`// redirect to profile`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`} catch {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`// show error`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <div className="clear" />
                <span>&nbsp;&nbsp;{`>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Username`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`type="text"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`name="username"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`value={username}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`onChange={(event) => setUsername(event.target.value)}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Password`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`type="password"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`name="password"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`value={password}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`onChange={(event) => setPassword(event.target.value)}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`type="checkbox"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`name="terms"`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`checked={terms}`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`onChange={(event) => setTerms(event.target.checked)}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<span>I have read the Terms and Conditions</span>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="submit">Register</button>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<pre>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`{JSON.stringify({ username, password, terms, submitted }, null, '  ')}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</pre>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</form>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
            </code>
            <div className={s.pagesResult}>
                <SimpleForm />
            </div>
        </div>
    );
}
