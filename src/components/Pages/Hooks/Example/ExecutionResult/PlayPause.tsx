import React, { FC, useRef } from 'react';

export const PlayPause: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const PlayPause = async () => {
        const video = videoRef.current as HTMLVideoElement;
        if (video.paused) {
            await video.play();
        } else {
            video.pause();
        }
    };
    return (
        <>
            <video
                ref={videoRef}
                autoPlay
                loop
                src="https://media.tenor.com/videos/632c96bbc411d8baa3f7f43692474808/webm"
                aria-label="video"
            />
            <div className="clear" />
            <button type="button" onClick={PlayPause}>⏯</button>
        </>
    );
};
