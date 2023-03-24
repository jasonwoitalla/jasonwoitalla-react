import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div style={{width:"100%", height:"100%"}}>
    <iframe
      width="100%"
      height="100%"
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;
