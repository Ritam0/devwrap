import React from 'react'
import { SlSocialGithub } from 'react-icons/sl'
import git from "./Track_imgs/github_track.png"
import Navbar from './Navbar'
import Preloader from './Preloader'
const Template = () => {
    const Projects=[
        {
            Name: "yumYard",
            github: "https://github.com/SC-ECE/DevWrap_EC101A",
            TechStack:"React Js",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709398980/xgrbblysita8brkffm71.png",
            description:"Food Delivery App",
            ID:"EC101A"
        },
        {
            Name: "BiteSquad",
            github: "https://github.com/SC-ECE/DevWrap_EC101B",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709400588/nryoxrgqeo7hf9usejec.png",
            description:"Food Delivery App",
            ID:"EC101B"
        },
        {
            Name: "ECE_Foodwala",
            github: "https://github.com/SC-ECE/DevWrap_EC101C",
            TechStack:"Next Js , TypeScript , Tailwind",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709401516/pgrzug2hbthvmfxg2kjh.png",
            description:"Food Delivery App",
            ID:"EC101C"
        },
        {
            Name: "Shop-Topia",
            github: "https://github.com/SC-ECE/DevWrap_EC102A",
            TechStack:"React Js",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709404396/xb9c6j1njvtmn3weqeeo.png",
            description:"E-Commerce",
            ID:"EC102A"
        },
        {
            Name: "Smart-Cart",
            github: "https://github.com/SC-ECE/DevWrap_EC102B",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709403070/rejcjda6oejuwb8ajary.png",
            description:"E-Commerce",
            ID:"EC102B"
        },
        {
            Name: "FuClothes",
            github: "https://github.com/SC-ECE/DevWrap_EC102C",
            TechStack:"Next Js , TypeScript",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709404671/arksvces0pmiekbkfzkd.png",
            description:"Clothing Market",
            ID:"EC102C"
        },
        {
            Name: "Fit-Club",
            github: "https://github.com/SC-ECE/DevWrap_EC103A",
            TechStack:"React Js",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709405152/pgo2ujiuxtrefrdkq3qe.png",
            description:"Gym Website",
            ID:"EC103A"
        },
        {
            Name: "MyGym",
            github: "https://github.com/SC-ECE/DevWrap_EC103B",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709405566/hn1tvmbiqrkdxkprxsjl.png",
            description:"Gym Website",
            ID:"EC103B"
        },
        {
            Name: "MediPlus",
            github: "https://github.com/SC-ECE/DevWrap_EC105A",
            TechStack:"React Js",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709406747/iinpdzy5tafhmv31gevf.png",
            description:"Medical Website",
            ID:"EC105A"
        },
        {
            Name: "MEDIcure",
            github: "https://github.com/SC-ECE/DevWrap_EC105B",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709405877/gz2htnjgynyjcbwl3b9o.png",
            description:"Medical Website",
            ID:"EC105B"
        },
        {
            Name: "TRAVELO",
            github: "https://github.com/SC-ECE/DevWrap_EC107A",
            TechStack:"React Js",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709408556/kqkkzumvlipjt0qpy1vb.png",
            description:"Travel Website",
            ID:"EC107A"
        },
        {
            Name: "Campus Tour",
            github: "https://github.com/SC-ECE/DevWrap_EC108A",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709407548/duybd8hoavuj5acx05if.png",
            description:"Give a Tour of Your Campus",
            ID:"EC108A"
        },
        {
            Name: "My Game",
            github: "https://github.com/SC-ECE/DevWrap_EC109A",
            TechStack:"HTML , CSS , JS",
            photo:"https://res.cloudinary.com/dwe6a50u4/image/upload/v1709408200/kkh1s8rc8701ufkr6vda.png",
            description:"Make Any Game as You Wish",
            ID:"EC109A"
        }
        
        
    ]
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className='template-bg'>
        <Preloader/>
        <Navbar/>
      <h1 className='text-[32px]'>Projects</h1>
      <div className="listofprojects flex flex-wrap gap-20 items-center justify-center p-[20px]">
      {Projects.map((project, id) => (
              <div className="bg-green">
                <div
                  key={id}
                  className="flex flex-col w-[100%] cursor-pointer text-black justify-center py-2 px-4 text-center items-center mt-12 rounded-[35px] shadow-2xl md:min-h-[340px]  card-item-div max-w-[700px] min-h-[260px] transition-transform hover:scale-105 hover:border-b-[6px] hover:border-b-[#a292e846] bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border border-gray-100"
                >
                  <img
                    src={project.photo}
                    alt="box_img"
                    className="w-[100%] mb-4 rounded-[25px] p-auto border-[2px] mt-[10px]"
                  />
                 
                  <p className="text-[32px] font-medium  mb-[5px] text-left" >
                    {project.Name}
                  </p>
                  <p className="text-[16px] font-medium mb-[5px] text-left" >
                    {project.description}
                  </p>
                  <p className="text-[16px] font-medium mb-[5px] text-left" >
                    {project.TechStack}
                  </p>
                  
                  <div className="flex mb-[20px] gap-8 items-center justify-center">
                    <a href={project.github} target="_blank">
                      <img className="w-[50px]" src={git} alt="" />
                    </a>
                    
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Template
