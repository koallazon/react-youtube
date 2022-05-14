import React, { useState, useEffect } from 'react';

function VideoPlay (props){
    useEffect(() => {
        console.log(props.item.id.videoId)
    }, [])
        return (
            <section className="play-section">
                <div className="player-frame">
                    <iframe 
                        id="ytplayer" 
                        type="text/html" 
                        width="100%" 
                        height="100%"
                        src={`https://www.youtube.com/embed/${props.item.id.videoId}?autoplay=1`}
                        frameBorder="0"
                    >
                    </iframe>
                </div>
                <div className="play-desc">
                    <h2>{props.item.snippet.title}</h2>
                    <strong>{props.item.snippet.channelTitle}</strong>
                    <p>{props.item.snippet.description}</p>
                </div>
            </section>
        );
}

export default VideoPlay;