import React, { useRef, useState, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    // Start muted to satisfy autoplay policies
    const [muted, setMuted] = useState(true);

    // Autoplay when component mounts
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => console.warn('Autoplay prevented:', err));
            }
        }
    }, []);

    const toggleMute = () => setMuted(prev => !prev);

    return (
        <div className="spotify-player">
            <div className="player-col left">
                <div className="album-art">
                    <img src="https://img.youtube.com/vi/SkcO47UDzzY/maxresdefault.jpg" alt="Album Art" />
                </div>
                <div className="track-info">
                    <div className="track-name">Revenge</div>
                    <div className="artist-name">$NOT</div>
                </div>
                <i className="fa-regular fa-heart like-icon"></i>
            </div>

            <div className="player-col center">
                <audio
                    ref={audioRef}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    muted={muted}
                    loop
                    style={{ width: '100%' }}
                />
            </div>

            <div className="player-col right">
                <button className="control-btn mute-btn" onClick={toggleMute}>
                    {muted ? <i className="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-high"></i>}
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;
