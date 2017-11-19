import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({video}) => {
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item">

        </iframe>
      </div>

      <div className="details">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object
};

export default VideoDetail;
