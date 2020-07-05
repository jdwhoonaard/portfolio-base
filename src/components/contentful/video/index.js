import React from "react";
import './index.scss';

const Video = ({ src }) => {
  return (
    <iframe
      title="video"
      width="100%"
      height="360"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  )
}

export default Video;