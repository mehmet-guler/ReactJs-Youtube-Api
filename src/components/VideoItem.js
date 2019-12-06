import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.description}
                style={{ height: "180px", width: "320px", border: "2px dashed grey" }}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;