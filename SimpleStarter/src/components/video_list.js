import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video_list_item';

const VideoList = ({videos}) => {
  console.log(videos);
  const videoItems = videos.map(video => <VideoListItem key={video.etag} video={video} />)

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array
};

export default VideoList;
