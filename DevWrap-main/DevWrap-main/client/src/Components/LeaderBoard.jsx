import React, { useState } from 'react';
import Navbar from './Navbar';
import githubLogo from "./Assets/GitHub Logomark.png"
import deployLogo from "./Assets/deploy logo.png"
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

const Leaderboard = () => {
  const Users = [
    {
      desc: "🥇", 
      projectid: 'EC101A',
      Team: "Design Dynamo",
      GithubLink: 'https://github.com/arnab7070/Design-Dynamo_EC101A',
      deployLink: 'https://yumyard-vert.vercel.app/',
      points  : 547,
    },
    {
      desc: "🥈", 
      projectid: 'EC102A',
      Team: 'CypherZ',
      GithubLink: 'https://github.com/Dhirajsingh212/cypherZ_EC102A/tree/main',
      deployLink: "https://cypher-z-ec-102-a.vercel.app/",
      points : 495,
    },
    {
      desc: "🥉", 
      projectid: 'EC105B',
      Team: 'Script Writers',
      GithubLink: 'https://github.com/Ranajit2005/Script_writers_EC105B',
      deployLink: "https://ranajit2005.github.io/Script_writers_EC105B/",
      points : 400,
    },
    { 
      desc: "4", 
      projectid: 'EC103B',
      Team: `Darth Vaders'`,
      GithubLink: 'https://github.com/ProSouvik/DarthVaders-_EC103B',
      deployLink: "http://109.106.255.25.8000/",
      points : 363,
    },
    { 
      desc: "5", 
      projectid: 'EC109A',
      Team: 'Byte Blaster',
      GithubLink: 'https://github.com/aditya-ghosh2992/ByteBlaster_EC109A/blob/main/README.md',
      deployLink: "https://main--gamesculpt-byteblaster.netlify.app/",
      points : 360,
    },
    { 
      desc: "6", 
      projectid: 'EC103A',
      Team: 'Noob Coders',
      GithubLink: 'https://github.com/trishit78/NoobCoders_EC103A',
      deployLink: "https://fitclub-noob-coders-0a128e.netlify.app/",
      points : 357,
    },
    { 
      desc: "7", 
      projectid: 'EC101B',
      Team: 'CodeCraft Zenith',
      GithubLink: 'https://github.com/Aditya-Paul-2003/CodeCraft-Zenith-s_EC101B',
      deployLink: "https://foodiez-two.vercel.app/ ",
      points : 272,
    },
    { 
      desc: "8", 
      projectid: 'EC102B',
      Team: 'Sharanga',
      GithubLink: ' https://github.com/OctoEcho/Sharangha-EC/' ,
      deployLink: "https://octoecho.github.io/Sharangha-EC/",
      points : 265,
    },
    { 
      desc: "9", 
      projectid: 'EC107A',
      Team: 'Loading Minds',
      GithubLink: 'https://github.com/LoadingMinds/Loading-Minds_EC107A',
      deployLink: "https://loading-minds-ec-107-a.vercel.app/ ",
      points : 259,
    },
    { 
      desc: "10", 
      projectid: 'EC108A',
      Team: 'Techbytes',
      GithubLink: 'https://github.com/unixx0055/TECHBYTES_EC108A.git',
      deployLink: "https://tour-aot-collage.vercel.app/",
      points : 231,
    },
    { 
      desc: "11", 
      projectid: 'EC105B',
      Team: 'PHOENIX',
      GithubLink: ' https://github.com/tanmoy-12/PHOENIX_EC105B',
      deployLink: "https://tanmoy-12.github.io/MediCure/",
      points : 230,
    },
    { 
      desc: "12", 
      projectid: 'EC103B',
      Team: 'Bug Squashers',
      GithubLink: ' https://github.com/arghadipmanna101/Bug-Squashers_EC103B',
      deployLink: "https://bug-squashers-ec-103-b-xi.vercel.app/",
      points : 216,
    },
    { 
      desc: "13", 
      projectid: 'EC105B',
      Team: 'Code Crafters',
      GithubLink: 'https://github.com/SristiPaul/Code-Crafters_EC105B',
      deployLink: "https://medicure-seven.vercel.app/",
      points : 182,
    },
    { 
      desc: "14", 
      projectid: 'EC102B',
      Team: 'Electrocoders',
      GithubLink: 'https://github.com/anubhab1001/Electrocoders_EC102B',
      deployLink: "http://online-cart-electrozone-2-1-1.netlify.app/",
      points : 180,
    },
    { 
      desc: "15", 
      projectid: 'EC108A',
      Team: 'Binary Bytes',
      GithubLink: 'https://github.com/aniketde1112/BinaryBytes_EC108A',
      deployLink: "https://binary-bytes-ec-108-a.vercel.app/",
      points : 123,
    },                                  
  
  ];
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
    <div className='result_bg'>
      <Navbar />
      {/* <h1 className='text-black height-[100vh] mt-[50%] lg:mt-[19%] lg:pb-[320px] text-[36px] pb-[400px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Coming soon.....</h1> */}
      <h1 className='text-black text-[36px] font-semibold lg:text-[64px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Leaderboard</h1>
      <span className='text-black text-lg lg:text-2xl'>Here is our Winners!!</span>
      <div className="table w-[320px] mx-auto mt-5 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border rounded-lg md:w-[600px] lg:w-[900px] lg:mt-10">
        <div className="relative overflow-x-auto w-[320px] rounded-lg md:w-[600px] lg:w-[900px]">
          <table className="w-[320px] text-sm text-left rtl:text-right text-white rounded-lg md:w-[600px] lg:w-[900px]">
            <thead className="text-xs text-white uppercase bg-transparent border-b-4 lg:text-lg">
              <tr>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Position
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Team Name
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Project ID
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Github Repo
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Deploy Link
                </th>
                {/* <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Points
                </th> */}
              </tr>
            </thead>
            <tbody>
              {/* Re-Use this Component  */}
              {Users.map((user, id) => (
              <tr className="bg-transparent border-b lg:text-xl">
                <th scope="row" className="text-white whitespace-nowrap overflow-x-auto px-1 py-2 text-xl md:px-6 md:py-3 md:text-3xl lg:px-8 lg:py-5 lg:text-2xl font-medium">
                  {user.desc}
                </th>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  {user.Team}
                </td>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  {user.projectid}
                </td>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  <a href={user.GithubLink} target='blank'>
                    <img src={githubLogo} className='h-[30px] w-[30px] mx-auto lg:h-[40px] lg:w-[40px]' alt="deploy link" />
                  </a>
                </td>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  <a href={user.deployLink} target='blank'>
                    <img src={deployLogo} className='h-[30px] w-[30px] mx-auto lg:h-[40px] lg:w-[40px]' alt="deploy link" />
                  </a>
                </td>
                {/* <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  {user.points}
                </td> */}
              </tr>
             
            ))}
            </tbody>
          </table>
        </div>

      </div>
       
     





    </div>
  )
}

export default Leaderboard

