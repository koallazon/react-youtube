import React, { Component } from 'react';

class videoItem extends Component {    
    render() {
        const thumbnailStyle = {
            backgroundImage: `url('${this.props.item.snippet.thumbnails.high.url}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            flex: '0 0 300px',
            width: '300px',
            height: '168px',
            borderRadius: '16px'
        }
        return (
            <li>
                <div style={thumbnailStyle}>
                    
                </div>
                <div class="video-text-area">
                    <p class="video-title">{this.props.item.snippet.title}</p>
                    <p class="video-channel-title">{this.props.item.snippet.channelTitle}</p>
                </div>
               
            </li>
        );
    }
}

export default videoItem;