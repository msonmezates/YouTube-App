import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};

export default VideoList;
