import React, { useState, useEffect } from 'react';
import './VideoPreloader.css'; // Import your CSS file for styling
import vdo from "./Assets/vdoloader.mp4"
const VideoPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById('videoElement');

    const handleLoadedData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500); // 3000 milliseconds delay

    };

    videoElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className={`video-preloader ${isLoading ? 'visible' : 'hidden'}`}>
      <video id="videoElement" autoPlay muted loop>
        <source src={vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreloader;