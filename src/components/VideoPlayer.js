import React, { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    return (
        <video
            id="video"
            preload="none"
            src="https://example.com/file.mp4"
            ref={videoRef}
            muted
            playsInline
            autoPlay
            style={{ width: '100%', maxWidth: '600px' }}
        />
    );
};

export default VideoPlayer;
