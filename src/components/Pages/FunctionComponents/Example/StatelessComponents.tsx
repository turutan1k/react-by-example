import React from 'react';
import s from '../../Pages.module.scss';
import { Button } from './ExecutionResult/Button';

export default function StatelessComponents() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (Stateless components)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{FC}`} from 'react'</span>
                <div className="clear20" />
                <span>export const Button: FC = {`({children}) = (`}</span>
                <div className="clear" />
                <span>&nbsp;{`<button>{children}</button>`}</span>
                <div className="clear" />
                <span>{`)`}</span>
                <div className="clear" />
                <span>
                    export default {`<Button>`}Hello World!{`</Button>`}
                </span>
            </code>
            <div className={s.pagesResult}>
                <Button>Hello World!</Button>
            </div>
        </div>
    );
}
