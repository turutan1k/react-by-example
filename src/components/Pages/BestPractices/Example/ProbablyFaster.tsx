import React from 'react';
import s from './../../Pages.module.scss';
import { ProbablyFasterResult } from './ExecutionResult/ProbablyFasterResult';
export default function ProbablyFaster() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>
                Example 2 (Probably Faster Filter)
            </h2>
            <code className={s.pagesExample}>
                <span>{`import React, {`}</span>
                <div className="clear" />
                <span>&nbsp;{`ChangeEventHandler,`}</span>
                <div className="clear" />
                <span>&nbsp;{`FC,`}</span>
                <div className="clear" />
                <span>&nbsp;{`memo,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useCallback,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useMemo,`}</span>
                <div className="clear" />
                <span>&nbsp;{`useState,`}</span>
                <div className="clear" />
                <span>{`from 'react}'`}</span>
                <div className="clear" />
                <span>{`const words = [`}</span>
                <div className="clear" />
                <span>&nbsp;{`'Lorem',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'ipsum',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'dolor',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'sit',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'amet',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'consectetur',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'adipiscing',`}</span>
                <div className="clear" />
                <span>&nbsp;{`'elit',`}</span>
                <div className="clear" />
                <span>{`]`}</span>
                <div className="clear" />
                <span>{`export const Slower: FC = () => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const [filter, setFilter] = useState('')`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`aria-label="filter"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`placeholder="filter"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`value={filter}`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`onChange={(event) => setFilter(event.target.value)}`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`{words`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`.filter((word) => word.toLowerCase().includes(filter.toLowerCase()))`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`.map((word) => (`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<li key={word}>{word}</li>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`}`}</span>
                <div className="clear" />
                <span>{`export const ProbablyFaster: FC = memo(() => {`}</span>
                <div className="clear" />
                <span>&nbsp;{`const [filter, setFilter] = useState('')`}</span>
                <div className="clear" />
                <span>
                    &nbsp;
                    {`const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;{`(event) => setFilter(event.target.value),`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`[],`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`const filteredWords = useMemo(`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`() =>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`words.filter((word) => word.toLowerCase().includes(filter.toLowerCase())),`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`[filter],`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`aria-label="filter"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`placeholder="filter"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`value={filter}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`onChange={onChange}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<ul>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`{filteredWords.map((word) => (`}
                </span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<li key={word}>{word}</li>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`</ul>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`)`}</span>
                <div className="clear" />
                <span>{`})`}</span>
            </code>
            <div className={s.pagesResult}>
                <ProbablyFasterResult />
            </div>
        </div>
    );
}
