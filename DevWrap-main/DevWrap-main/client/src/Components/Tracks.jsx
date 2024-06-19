import React from 'react'
import Navbar from './Navbar'
import Logo from "./Assets/Devwrap_Logo.png";
import Preloader from './Preloader';
const Tracks = () => {
  
    const TrackList = [
      {
        img: `${Logo}`,
        track_logo:"https://st3.depositphotos.com/11953928/32674/v/450/depositphotos_326745990-stock-illustration-friendship-of-girls-cartoons-design.jpg",
        title: "Track #1",
        track_desc:"Best All Girls Team"
      },
      {
        img: `${Logo}`,
        track_logo:"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
        title: "Track #2",
        track_desc:"Best Use Of Github"
      },
      // {
      //   img: `${Logo}`,
      //   track_logo:"https://www.creativefabrica.com/wp-content/uploads/2021/05/03/User-Authentication-Line-Filled-Icon-Graphics-11623737-1-1-580x386.jpg",
      //   title: "Track #3",
      //   track_desc:"Best Authentication System"
      // },
      // {
      //   img: `${Logo}`,
      //   track_logo:"https://www.simplihire.com/wp-content/uploads/2023/09/ux-ui-logo.png",
      //   title: "Track #4",
      //   track_desc:"Best UI/UX"
      // },
      // {
      //   img: `${Logo}`,
      //   track_logo:"https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg",
      //   title: "Track #5",
      //   track_desc:"Best Responsive Design"
      // },
      
    ];
  return (
    <div className='trackbg h-[1500px] lg:h-[780px]'>
      {/* <div className="blr absolute border border-black lg:w-[1440px] w-[500px] h-[1100px] lg:h-[550px] m-auto lg:mt-[70px] lg:ml-[50px] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 z-[50]">
           
            </div> */}
      <Preloader/>
      <Navbar/>
      <h1 className='text-black height-[100vh] mt-[50%] lg:mt-[19%] lg:pb-[320px] text-[36px] pb-[400px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Coming soon.....</h1>
      {/*<div className="flex  glass-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-auto ml-[240px] ">
        {TrackList.map((Track, id) => (
          <div
            key={id}
            className="flex flex-col w-[400px] h-[400px] cursor-pointer bg-white-800 justify-center text-center items-center mt-12 rounded-[35px] shadow-2xl z-[10]"
          >
            <img src={Track.img} alt="box_img" className="w-[175px] mb-4" />
            <p className="text-[24px] font-bold uppercase mb-7">{Track.title}</p>
            <div className="card_desc flex flex-col items-center">
      
            {/* <p className='text-black font-medium text-[20px]'>
              {Track.track_desc}
            </p> */}
            {/* </div>
           
              
          </div>
        ))}
      </div> */} 
            
    </div>
  )
}

export default Tracks
