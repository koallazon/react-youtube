import React, { Component } from 'react';
import VideoItem from './videoItem'
class videoList extends Component {

    onViewContent = (item) => {
      this.props.onViewContent(item)
    }

    render() {
      const playClass = this.props.mode === 'play' ? ' play-video-list' : ''
        return (
            <ul className={'video-list' + playClass}>
        { this.props.items.map(item => (
          <VideoItem 
            key={item.etag} 
            item={item}
            onViewContent={this.onViewContent}
          />
        ))}
      </ul>
        );
    }
}

export default videoList;