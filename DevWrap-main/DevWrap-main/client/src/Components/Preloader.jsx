// Preloader.jsx
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './Assets/load.json'; // Replace with the actual path to your Lottie animation JSON file
 import './Preloader.css'; // Import your preloader styles

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching) using setTimeout
    const fetchData = async () => {
      // Simulating a delay of 2 seconds (you should replace this with your actual data fetching logic)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading to false once data is fetched or any asynchronous operation is completed
    };

    fetchData();
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={`preloader ${isLoading ? 'visible' : 'hidden'}`}>
      <Lottie options={lottieOptions} height={200} width={200} />
    </div>
  );
};

export default Preloader;
