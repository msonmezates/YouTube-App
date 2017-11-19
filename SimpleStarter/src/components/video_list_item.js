import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({video}) => {

  const imgUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {videoTitle}
          </div>
        </div>
      </div>
    </li>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object
};

export default VideoListItem;
