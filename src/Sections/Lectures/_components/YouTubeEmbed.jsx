import React, { useRef } from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
    const iframeRef = useRef(null);

    // useEffect(() => {
    //     const loadYouTubeAPI = () => {
    //         if (!window.YT) {
    //             const script = document.createElement('script');
    //             script.src = 'https://www.youtube.com/iframe_api';
    //             script.async = true;
    //             document.body.appendChild(script);
    //             script.onload = initializePlayer;
    //         } else {
    //             initializePlayer();
    //         }
    //     };

    //     const initializePlayer = () => {
    //         new window.YT.Player(iframeRef.current, {
    //             events: {
    //                 onReady: (event) => {
    //                     console.log('YouTube Player is ready');
    //                     // Example: Start playing at a specific time
    //                     event.target.seekTo(30); // Jump to 30 seconds
    //                 },
    //             },
    //         });
    //     };

    //     loadYouTubeAPI();
    // }, []);

    return (
        <iframe
            ref={iframeRef}
            id="ytplayer"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    );
};

export default YouTubeEmbed;
