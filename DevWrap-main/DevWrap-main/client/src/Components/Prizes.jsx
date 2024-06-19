import React from 'react'
import Navbar from './Navbar'
import github from "./Track_imgs/github_track.png"
import auth from "./Track_imgs/auth_track.png"
import girls from "./Track_imgs/girls_track.png"
import uiux from "./Track_imgs/uiux_track.png"
import responsive from "./Track_imgs/responsive_track.png"
import beginer from "./Track_imgs/Begginer_track.png"
import first from "./Assets/1Badge.png"
import second from "./Assets/2Badge.png"
import third from "./Assets/3Badge.png"
import Preloader from './Preloader'
const Prizes = () => {

    const TrackList = [
        {
          track_logo:girls,
          title: "Track #1",
          track_desc:"Best All Girls Team",
          winner:"Loading Minds"
        },
        {
          track_logo:github,
          title: "Track #2",
          track_desc:"Best Use Of Github",
          winner:"Noob Coders"
        },
        {
          track_logo:beginer,
          title: "Track #3",
          track_desc:"Best Beginner Team",
          winner:"DarthVedars' & ByteBlaster"
        },
        {
          track_logo:uiux,
          title: "Track #4",
          track_desc:"Best UI/UX",
          winner:"Design Dynamo"
        },
        {
          track_logo:responsive,
          title: "Track #5",
          track_desc:"Best Responsive Design",
          winner:"Noob Coders"
        },
        
      ];
  return (
    <div className='prize_bg'  style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Preloader/>
        <Navbar/>
        <div className="prize flex flex-col lg:flex-row gap-8 items-center justify-center mt-[10px]">
        <div className="lg:hidden first border border-[2px] border-[#2b2b2b] hover:border-b-[10px]  hover:border-[#FFD700]  focus:border-transparent  h-[400px] w-[300px] shadow-2xl rounded-[25px]  bg-white-100  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 hover:shadow-[#FFD700]
">
                  <div className="inprize flex items-center justify-center flex-col p-[5px]">
                    <img src={first} alt="" className='w-[100px]' />
                <h1 className='text-[50px] font-semibold'>3K INR</h1>
                <h4 className='text-[20px]'>Prize Money</h4>
                <h4 className='text-[30px]'>Winner</h4>
                <p className='mt-[20px]'>There are many track prizes with it</p>

                  </div>
              </div>
              <div className="2nd border border-[2px] border-[#2b2b2b] hover:border-b-[10px] hover:border-[#C0C0C0]  focus:border-transparent  h-[400px] w-[300px] shadow-2xl lg:mt-[100px] rounded-[25px]  bg-white-100  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 hover:shadow-[#0C0C0C]
">
                  <div className="inprize flex items-center justify-center flex-col p-[5px]">
                    <img src={second} alt="" className='w-[100px]' /> 
                  <h1 className='text-[50px] font-semibold'>2K INR</h1>
                  <h4 className='text-[20px]'>Prize Money</h4> 
                  <h4 className='text-[30px]'>1st Runners up</h4>
                  <p className='mt-[20px]'>There are many track prizes with it</p>               
                    </div>                    
              </div>
              <div className="hidden lg:block first border border-[2px] border-[#2b2b2b] hover:border-b-[10px]  hover:border-[#FFD700]  focus:border-transparent  h-[400px] w-[300px] shadow-2xl rounded-[25px]  bg-white-100  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 hover:shadow-[#FFD700]
">
                  <div className="inprize flex items-center justify-center flex-col p-[5px]">
                    <img src={first} alt="" className='w-[100px]' />
                <h1 className='text-[50px] font-semibold'>3K INR</h1>
                <h4 className='text-[20px]'>Prize Money</h4>
                <h4 className='text-[30px]'>Winner</h4>
                <p className='mt-[20px]'>There are many track prizes with it</p>

                  </div>
              </div>
              <div className="3rd border  border-[2px] border-[#2b2b2b] hover:border-b-[10px]  hover:border-[#CD7F32]  focus:border-transparent h-[400px] w-[300px] shadow-2xl lg:mt-[100px] rounded-[25px]  bg-white-100  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 hover:shadow-[#CD7F32]
">
                  <div className="inprize flex items-center justify-center flex-col p-[5px]">
                    <img src={third} alt="" className='w-[100px]' />
                <h1 className='text-[50px] font-semibold'>1K INR</h1>
                <h4 className='text-[20px]'>Prize Money</h4>
                <h4 className='text-[30px]'>2nd Runners up</h4>
                <p className='mt-[20px]'>There are many track prizes with it</p>

                  </div>
              </div>
        </div>
       
        <div className="winners flex flex-wrap gap-20 items-center justify-center p-[50px]">
        {TrackList.map((Track, id) => (
                <div key={id} className="card_winner cursor-pointer">
                      <div className="flip-card_leader w-[400px] h-[100px]  ">
                        <div className="flip-card-inner_leader">
                          <div className="flip-card-front_leader flex items-center justify-center gap-4">
                            <img src={Track.track_logo} alt="Avatar"/>
                            <p>{Track.track_desc}</p>
                          </div>
                          <div className="flip-card-back_leader">
                            <h1>{Track.winner}</h1>
                          </div>
                        </div>
                      </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Prizes
