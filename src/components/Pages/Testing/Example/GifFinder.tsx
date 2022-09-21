import React, { useEffect } from 'react';
import s from '../../Pages.module.scss';
import { Example } from './ExecutionResult/Example';

export default function GifFinder() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 1 (GifFinder)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, useEffect, useState } from 'react'`}</span>
                <div className={'clear'} />
                <span>{`import classes from './example.module.css'`}</span>
                <div className={'clear'} />
                <span>{`import { TenorAPI } from './tenor-api'`}</span>
                <div className={'clear20'} />
                <span>{`export interface GifFinderProps {`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`onFound?(url: string): void`}</span>
                <div className={'clear'} />
                <span>{`}`}</span>
                <div className={'clear'} />
                <span>{`export const GifFinder: FC<GifFinderProps> = ({ onFound }) => {`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`const [query, setQuery] = useState('')`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;
                    {`const [results, setResults] = useState<string[] | null>(null)`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;{`useEffect(() => {`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`let shouldUpdate = true`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`if (query) {`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`TenorAPI.search(query).then((newResults) => {`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`if (shouldUpdate) setResults(newResults)`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`})`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`}`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`return () => {`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`shouldUpdate = false`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`}`}</span>
                <div className={'clear'} />
                <span>{`}, [query])`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`return (`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`<section>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`<label>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`find a gif`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<input`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`placeholder="query"`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`value={query}`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`onChange={(event) => setQuery(event.target.value)}`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`</label>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`{results && (`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<div className={classes.grid}>`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{results.map((result) => (`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<button`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`type="button"`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`key={result}`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`className={classes.button}`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`onClick={() => onFound && onFound(result)}`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`aria-label="gif"`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`>`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`<img className={classes.image} src={result} alt="gif" />`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`))}`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`)}`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`</section>`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`)`}</span>
                <div className={'clear'} />
                <span>{`}`}</span>
                <div className={'clear'} />
                <span>{`export const Example: FC = () => {`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;
                    {`const [gif, setGif] = useState<string | null>(null)`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`return gif ? (`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`<div>`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`<img src={gif} alt="gif" />`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`<p>found gif</p>`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={() => setGif(null)}>`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`find new gif`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{`</button>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;&nbsp;{`</div>`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`) : (`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`<GifFinder onFound={setGif} />`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`)`}</span>
                <div className={'clear'} />
                <span>{`}`}</span>
            </code>
            <div className={s.pagesResult}>
                <Example />
            </div>
        </div>
    );
}
