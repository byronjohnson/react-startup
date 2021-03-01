import React from 'react';

const VideoItem = (props) => {

    return (
        <div>
            <div>{props.video.snippet.title}</div>
            <div><img src={props.video.snippet.thumbnails.high.url} /></div>
        </div>
    );

}

export default VideoItem;