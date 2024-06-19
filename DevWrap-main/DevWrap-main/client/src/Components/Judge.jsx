import React from 'react'
import Navbar from './Navbar'
import DebayanDa from "./Judge_Image/DebayanDa.png"
import PriyoDa from "./Judge_Image/PriyoDa.png"
import ChotoPriyoDa from "./Judge_Image/ChotoPriyoDa.png"
import ArchanDa from "./Judge_Image/ArchanDa.png"
import SumitavaDa from "./Judge_Image/SumitavaDa.png"
import IndraniDi from "./Judge_Image/IndraniDi.png"

import ChotoDebayanDa from "./Judge_Image/ChotoDebayanDa.png"
import ChotoArchanDa from "./Judge_Image/ChotoArchanDa.png"
import ChotoSumitavaDa from "./Judge_Image/ChotoSumitavaDa.png"
import ChotoIndraniDi from "./Judge_Image/ChotoIndraniDi.png"
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

import { useState } from 'react'
import "./BG.css"
import Preloader from './Preloader'

const Judge = () => {
    const Heros = [
        // { 
        //     chotoImg:ChotoSumitavaDa,
        //     imgSrc: SumitavaDa, 
        //     name: 'Sumitava Chakraborty', 
        //     position: 'SDE at IBM', 
        //     details: 'Sumitava Chakrabory, an accomplished SDE at IBM, brings a wealth of expertise to his role. With a keen eye for detail and a passion for problem-solving, Sumitava consistently delivers innovative solutions. His dedication to excellence has earned him recognition as a valuable asset within the IBM community.' 
        // },
       
        { 
            chotoImg:ChotoDebayanDa,
            imgSrc: DebayanDa, 
            name: 'Debayan Majumder', 
            position: 'Researcher at TCS', 
            details: 'Debayan Majumder, a a researcher & designer at TCS, is renowned for his multifaceted skills in graphics design, music, and photography. With a flair for creativity and attention to detail, Debayan crafts visually stunning designs that captivate audiences. Through his photography, Debayan captures moments that evoke emotion and tell compelling stories.' 
        },
        { 
            chotoImg:ChotoIndraniDi,
            imgSrc: IndraniDi, 
            name: 'Indrani Chakraborty', 
            position: 'GET at TISMO', 
            details: 'Indrani Chakraborty, a Trainee Engineer at Tismo Technology Solutions (P) Ltd., stands out for her leadership and teamwork skills. She excels in C#, .NET Framework, and Angular, actively applying her expertise to develop real-time applications. Indrani is known for her dedication to personal and professional growth, actively mentoring and empowering others in her community.' 
        },
        { 
            chotoImg:ChotoPriyoDa,
            imgSrc: PriyoDa, 
            name: 'Priyadarshan Ghosh', 
            position: 'SDE 1 Binance', 
            details: `Priyadarshan Ghosh, an SDE1 at Binance, is renowned for his exceptional skills in web development. With a penchant for crafting intuitive and user-friendly interfaces, Priyadarshan consistently exceeds expectations. His contributions to Binance's web platform have garnered praise from colleagues and users alike, establishing him as a standout talent in the field.` 
        },
        { 
            chotoImg:ChotoArchanDa,
            imgSrc: ArchanDa, 
            name: 'Archan Banerjee', 
            position: 'SDE 1 Rupeek', 
            details: `Archan Banajeree, a talented SDE1 at Rupeek, demonstrates remarkable skills in software development. His proactive approach and analytical mindset contribute significantly to the team's success. Archan's commitment to continuous learning and growth reflects his dedication to delivering top-notch solutions. Outside of his professional endeavors, he enjoys staying updated on industry trends.` 
        },
       
        // Add more image data as needed
      ];
    const [Hero_Name,setHero_Name]=useState(Heros[0].name);
    const [Hero_position,setHero_position]=useState(Heros[0].position);
    const [Hero_Details,setHero_Details]=useState(Heros[0].details);
    const [Hero_src,setHero_src]=useState(Heros[0].imgSrc);
    const [prev_src,setPrev_src]=useState(true);
    const [open,setOpen]=useState(false);
    const [openIndex,setOpenIndex]=useState(999);

    const setHero = (name,src,position,details)=>{
        
        setHero_Name(name);
        setHero_position(position);
        setHero_Details(details);
        setHero_src(src);
        setPrev_src(false);
        setTimeout(() => {
            setPrev_src(true);
          },500);
    }
    const downIconHandel=(index)=>{
        setOpenIndex(index)
    }
    const upIconHandel=(index)=>{
        setOpenIndex(999)
    }
    
    
  return (
    <div className='JudgeTemp'  style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Preloader/>
      <Navbar/>
      <div className="hidden lg:block midsec flex flex-col mt-[100px]">
        <div className="midtop flex mb-[-14%] ">
            <div className="details flex flex-col flex-[45%] mt-[50px] text-left ml-[15%]  ">
                <h1 className={`text-medium text-[40px] transition-opacity duration-1000 ease-in-out   ${prev_src ? 'opacity-100' : 'opacity-0'}`}>{Hero_Name}</h1>
                <h4 className={`text-normal text-[24px] transition-opacity duration-1000 ease-in-out   ${prev_src ? 'opacity-100' : 'opacity-0'}`}>{Hero_position}</h4>
                <br />
                <p className='text-[16px] mr-[20%]'>{Hero_Details}</p>
            </div>
            <div  className={`pic flex-[55%] mr-[10%] h-[750px] `}>
                <img key={Hero_src} src={Hero_src} alt=""  className={` transition-opacity duration-1000 ease-in-out   ${prev_src ? 'opacity-100' : 'opacity-0'}`}/>
            </div>
        </div>
        

            <div className=" glass bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-[#e5e3e300] ">
                <div className="bottomNav flex m-auto ml-[10%] mr-[10%]  mb-[3%] mt-[3%] gap-[50px]">
                    {Heros.map((Hero, index) => (
                        <div key={index} className="btmhero cursor-pointer w-[500px] flex flex-col items-center mb-[2%]" onMouseOver={()=>setHero(Hero.name,Hero.imgSrc,Hero.position,Hero.details)}
                        onMouseOut={() => {
                            console.log('Mouse left!');
                           
                          }}
                        >
                            <img src={Hero.chotoImg} alt="" className='hover:scale-110 hover:duration-1000 duration-1000 w-[120px]'/>
                            <h1 className='p-[10px] text-[16px]'>{Hero.name}</h1>
                        </div>            
                ))}
                </div>
            </div>
        

      </div>

      


      <div className="lg:hidden responsive ">
                
            <div className="glass flex flex-col items-center justify-center   ">
                
                    {Heros.map((Hero, index) => (

                        <div key={index} className="btmhero cursor-pointer bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 mb-[50px] mt-[20px] w-[350px] p-[10px] rounded-[20px]" 
                        >
                            <div className="imgandname flex">
                            <img src={Hero.chotoImg} alt="" className='w-[100px]'/>
                            <div className="flex flex-col text-left ml-[10px]">
                                <h1 className='p-[5px] text-[16px]'>{Hero.name}</h1>
                                <h2 className='p-[5px] text-[16px]'>
                                    {Hero.position}
                                </h2>
                                <div className={`ml-[50px] p-[5px] m-auto hover:scale-110 ${(openIndex!==index)? 'block': 'hidden'}`} onClick={() => downIconHandel(index)}>
  <SlArrowDown/>
</div>
 
                            
                            </div>
                            
                        </div>
                            
                        <div className={`flex flex-col details text-left p-[10px] ${(openIndex===index)? 'block': 'hidden'}`}>
                                <p>
                                    {Hero.details}
                                </p>
                                <div className="ml-[140px] p-[5px] m-auto hover:scale-110" onClick={() => upIconHandel(index)}>
  <SlArrowUp/>
</div>
                            </div>
                        </div>            
                ))}
    
            </div>
            <div className=" h-[200px]"></div>
      </div>
      


    </div>
  )
}

export default Judge
