import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';

const Works = () => {

    const opts: YouTubeProps['opts'] = {
        height: '360',
        width: '640',
    };

    const videoIds = [
        'GnkJoL9fyio',
        'GnkJoL9fyio',
        'GnkJoL9fyio',
        'GnkJoL9fyio',
    ]

    return (
        <div style={{ display: 'grid', placeItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr)' }}>
            {videoIds.map(video => (
                <div style={{ display: 'flex' }}>
                    <YouTube videoId={video} opts={opts} />
                </div>
            ))}
        </div>
    )
}

export default Works;