import React, { useState } from 'react';
import Navbar from './Navbar';
import githubLogo from "./Assets/GitHub Logomark.png"
import deployLogo from "./Assets/deploy logo.png"


const Result = () => {
  const Users = [
    {
      id: 1, 
      projectid: 'EC103B',
      Team: `DarthVaders'`,
      GithubLink: 'http://github.com/ProSouvik/DarthVaders-_EC103B',
      deployLink: "https://darth-vaders-ec-103-b.vercel.app/"
    },
    {
      id: 2, 
      projectid: 'EC103B',
      Team: 'Bug Squashers',
      GithubLink: 'https://github.com/arghadipmanna101/Bug-Squashers_EC103B',
      deployLink: "https://bug-squashers-ec-103-b.vercel.app/"
    },
    {
      id: 3, 
      projectid: 'EC107A',
      Team: 'Loading Minds',
      GithubLink: 'https://github.com/LoadingMinds/Loading-Minds_EC107A',
      deployLink: "https://loading-minds-ec-107-a.vercel.app/#"
    },
    {
      id: 4, 
      projectid: 'EC103A',
      Team: 'Noob Coders',
      GithubLink: 'https://github.com/trishit78/NoobCoders_103A',
      deployLink: "https://fitclub-devwrap.netlify.app/"
    },
    {
      id: 5, 
      projectid: 'EC101A',
      Team: 'Design Dynamo',
      GithubLink: 'https://github.com/arnab7070/Design-Dynamo_EC101A',
      deployLink: "https://yumyard-vert.vercel.app/"
    },
    {
      id: 6, 
      projectid: 'EC101B',
      Team: `CodeCraft Zenith's`,
      GithubLink: 'https://github.com/Aditya-Paul-2003/CodeCraft-Zenith-s_EC101B',
      deployLink: "https://foodiez-cczenith.vercel.app/"
    },
    {
      id: 7, 
      projectid: 'EC102B',
      Team: 'Sharanga',
      GithubLink: 'https://github.com/Sayandipdey/Sharanga_EC102B',
      deployLink: "https://sayandipdey.github.io/Sharanga_EC102B/"
    },
    {
      id: 8, 
      projectid: 'EC108A',
      Team: 'Techbytes',
      GithubLink: 'https://github.com/unixx0055/TECHBYTES_EC108A.git',
      deployLink: "https://tour-aot-collage.vercel.app/"
    },
    {
      id: 9, 
      projectid: 'EC102B',
      Team: 'Electrocoders',
      GithubLink: 'https://github.com/anubhab1001/Electrocoders_EC102B',
      deployLink: "https://electrozone-online-cart-1-1-3.netlify.app/"
    },
    {
      id: 10, 
      projectid: 'EC108A',
      Team: 'Binary Bytes',
      GithubLink: 'https://github.com/aniketde1112/BinaryBytes_EC108A',
      deployLink: "https://binary-bytes-ec-108-a.vercel.app/"
    },
    {
      id: 11, 
      projectid: 'EC105B',
      Team: 'Script writers',
      GithubLink: 'https://github.com/Ranajit2005/Script_writers_EC105B',
      deployLink: "https://ranajit2005.github.io/Script_writers_EC105B/"
    },
    {
      id: 12, 
      projectid: 'EC109A',
      Team: 'ByteBlaster',
      GithubLink: 'https://github.com/aditya-ghosh2992/ByteBlaster_EC109A',
      deployLink: "https://gamesculpt-byteblaster.netlify.app/"
    },
    {
      id: 13, 
      projectid: 'EC102A',
      Team: 'cypherZ',
      GithubLink: 'https://github.com/Dhirajsingh212/cypherZ_EC102A',
      deployLink: "https://cypher-z-ec-102-a.vercel.app/"
    },
    {
      id: 14, 
      projectid: 'EC105B',
      Team: 'Code Crafters',
      GithubLink: 'https://github.com/SristiPaul/Code-Crafters_EC105B',
      deployLink: "https://medicure-seven.vercel.app/"
    },
    {
      id: 15, 
      projectid: 'EC105B',
      Team: 'PHOENIX',
      GithubLink: 'https://github.com/tanmoy-12/PHOENIX_EC105B',
      deployLink: "https://tanmoy-12.github.io/MediCure/"
    },
    
  
  ];
  return (
    <div className='result_bg'>
      <Navbar />
      {/* <h1 className='text-black height-[100vh] mt-[50%] lg:mt-[19%] lg:pb-[320px] text-[36px] pb-[400px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Coming soon.....</h1> */}
      <h1 className='text-black text-[36px] font-semibold lg:text-[64px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Leaderboard</h1>
      <span className='text-black text-lg lg:text-2xl'>These Teams will compete in the Final</span>
      <div className="table w-[320px] mx-auto mt-5 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border rounded-lg md:w-[600px] lg:w-[900px] lg:mt-10">
        <div className="relative overflow-x-auto w-[320px] rounded-lg md:w-[600px] lg:w-[900px]">
          <table className="w-[320px] text-sm text-left rtl:text-right text-white rounded-lg md:w-[600px] lg:w-[900px]">
            <thead className="text-xs text-white uppercase bg-transparent border-b-4 lg:text-lg">
              <tr>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Sl. No.
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Team Name
                </th>
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Project ID
                </th>
                
                <th scope="col" className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  Deploy Link
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Re-Use this Component  */}
              {Users.map((user, id) => (
              <tr className="bg-transparent border-b lg:text-xl">
                <th scope="row" className="text-white whitespace-nowrap overflow-x-auto w-[20px] px-6 lg:px-8">
                  {user.id}
                </th>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  {user.Team}
                </td>
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  {user.projectid}
                </td>
                
                <td className="px-1 py-2 md:px-6 md:py-3 lg:px-8 lg:py-5">
                  <a href="https://www.sceceaot.com/tracks" target='blank'>
                    <img src={deployLogo} className='h-[30px] w-[30px] mx-auto lg:h-[40px] lg:w-[40px]' alt="deploy link" />
                  </a>
                </td>
              </tr>
             
            ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Result

