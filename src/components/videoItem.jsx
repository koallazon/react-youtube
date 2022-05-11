import React, { Component } from 'react';

class videoItem extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.item.snippet.channelTitle)}
            </div>
        );
    }
}

export default videoItem;