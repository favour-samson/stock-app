import React from "react";
import NextVideo from "next-video";
import video from "../../public/videos/videoplayback.mp4";
const VideoPlayer = () => {
  return (
    <div className="overflow-hidden rounded-md max-w-[768px] h-[342px] px-5">
      <NextVideo src={video} />
    </div>
  );
};

export default VideoPlayer;
