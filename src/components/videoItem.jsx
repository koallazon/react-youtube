import React, { Component } from 'react';

class videoItem extends Component {    
    onViewContent = () => {
        this.props.onViewContent(this.props.item)
    }

    render() {
        const thumbnailStyle = {
            backgroundImage: `url('${this.props.item.snippet.thumbnails.high.url}')`,
        }
        
        return (
            <li onClick={this.onViewContent}>
                <div style={thumbnailStyle} className="video-thumbnail"></div>
                <div class="video-text-area">
                    <p class="video-title">{this.props.item.snippet.title}</p>
                    <p class="video-channel-title">{this.props.item.snippet.channelTitle}</p>
                </div>
               
            </li>
        );
    }
}

export default videoItem;