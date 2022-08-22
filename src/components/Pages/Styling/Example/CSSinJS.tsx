import React from 'react';
import s from '../../Pages.module.scss';
import { Styled } from './ExecutionResult/Styled';

export default function CSSinJS() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 3 (CSS in JS)</h2>
            <code className={s.pagesExample}>
                <span>{`import React, { FC, useState } from 'react';`}</span>
                <div className={'clear'} />
                <span>{`import styled from 'styled-components';`}</span>
                <div className={'clear'} />
                <span>{`import { Slider } from './Slider';`}</span>
                <div className={'clear20'} />
                <span>
                    {`const Wrapper = styled.div`}
                    {`'`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;{`min-height: 250px;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`min-width: 250px;`}</span>
                <div className={'clear'} />
                <span>{`'`}</span>
                <div className={'clear'} />
                <span>{`const Circle = styled.div<{ fontSize: number }>'`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`align-items: center;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`background-color: dodgerblue;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`border-radius: 99999px;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`color: aliceblue;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`display: flex;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`flex-direction: column;`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;{`font-family: Arial, Helvetica, sans-serif;`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;font-size: ${`{(props) => props.fontSize}em;`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;{`height: 10em;`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`justify-content: center;`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;
                    {`transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;{`width: 10em;`}</span>
                <div className={'clear'} />
                <span>{`';`}</span>
                <div className={'clear'} />
                <span>{`export const Styled: FC = () => {`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`const [value, setValue] = useState(100);`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`return (`}</span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`<Wrapper>`}</span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<Slider value={value} onChange={setValue} />`}
                </span>
                <div className={'clear'} />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<Circle fontSize={value * 0.01}>awesome circle</Circle>`}
                </span>
                <div className={'clear'} />
                <span>&nbsp;&nbsp;{`</Wrapper>`}</span>
                <div className={'clear'} />
                <span>&nbsp;{`);`}</span>
                <div className={'clear'} />
                <span>{`};`}</span>
                <div className={'clear'} />
            </code>
            <div className={s.pagesResult}>
                <Styled />
            </div>
        </div>
    );
}
