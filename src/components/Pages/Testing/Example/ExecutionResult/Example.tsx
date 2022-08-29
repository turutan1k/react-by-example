import React, { FC, useState, useEffect } from 'react';
import classes from './example.module.scss';
import { TenorAPI } from './tenor-api';

export interface GifFinderProps {
    onFound?(url: string): void;
}

export const GifFinder: FC<GifFinderProps> = ({ onFound }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[] | null>(null);

    useEffect(() => {
        let shouldUpdate = true;
        if (query) {
            TenorAPI.search(query).then((newResults) => {
                if (shouldUpdate) setResults(newResults);
            });
        }
        return () => {
            shouldUpdate = false;
        };
    }, [query]);

    return (
        <section>
            <label>
                find a gif
                <input
                    placeholder="query"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </label>
            {results && (
                <div className={classes.grid}>
                    {results.map((result) => (
                        <button
                            type="button"
                            key={result}
                            className={classes.button}
                            onClick={() => onFound && onFound(result)}
                            aria-label="gif"
                        >
                            <img
                                className={classes.image}
                                src={result}
                                alt="gif"
                            />
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
};

export const Example: FC = () => {
    const [gif, setGif] = useState<string | null>(null);
    return gif ? (
        <div>
            <img src={gif} alt="gif" />
            <p>found gif</p>
            <button type="button" onClick={() => setGif(null)}>
                find new gif&nbsp;&nbsp;&nbsp;
            </button>
        </div>
    ) : (
        <GifFinder onFound={setGif} />
    );
};
