import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({video}) => {
  console.log(video);
  return (
    <li>Video Item</li>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object
};

export default VideoListItem;
