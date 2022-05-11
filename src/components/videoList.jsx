import React, { Component } from 'react';
import VideoItem from './videoItem'
class videoList extends Component {
    render() {
        return (
            <ul>
        { this.props.items.map(item => (
          <VideoItem 
            key={item.etag} 
            item={item}
          />
        ))}
      </ul>
        );
    }
}

export default videoList;