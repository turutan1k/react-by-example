import React from 'react';
import s from '../../Pages.module.scss';
import { PlayPause } from './ExecutionResult/PlayPause';

export default function UseRefHook() {
    return (
        <div className={s.pagesWrapper}>
            <h2 className={s.pagesHeader}>Example 2 (UseRef hook)</h2>
            <code className={s.pagesExample}>
                <span>import React, {`{(FC, useRef)}`} from 'react';</span>
                <div className="clear20" />
                <span>{`export const PlayPause: FC = () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;{`const videoRef = useRef<HTMLVideoElement>(null);`}
                </span>
                <div className="clear" />
                <span>&nbsp;{`const PlayPause = async () => {`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;
                    {`const video = videoRef.current as HTMLVideoElement;`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`if (video.paused) {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`await video.play();`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`} else {`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`video.pause();`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`}`}</span>
                <div className="clear" />
                <span>&nbsp;{`};`}</span>
                <div className="clear" />
                <span>&nbsp;{`return (`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`<>`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`<video`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`ref={videoRef}`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`autoplay`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`loop`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`src="https://media.tenor.com/videos/632c96bbc411d8baa3f7f43692474808/webm"`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`aria-label="video"`}</span>
                <div className="clear" />
                <span>&nbsp;&nbsp;&nbsp;{`/>`}</span>
                <div className="clear" />
                <span>
                    &nbsp;&nbsp;&nbsp;
                    {`<button type="button" onClick={PlayPause}>⏯</button>`}
                </span>
                <div className="clear" />
                <span>&nbsp;&nbsp;{`</>`}</span>
                <div className="clear" />
                <span>&nbsp;{`);`}</span>
                <div className="clear" />
                <span>{`};`}</span>
            </code>
            <div className={s.pagesResult}>
                <PlayPause />
            </div>
        </div>
    );
}
