import React from "react";
import Navbar from "./Navbar";
import Linkdin from "./Assets/linkdin.png";
import facebook from "./Assets/facebook.png";
import ldn from "./Assets/linkedin.png";
import X from "./Assets/x2.png";
import Insta from "./Assets/instagram.png";
import DC from "./Assets/discord.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from "./Preloader";
const About = () => {
  const team = [
    {
      img: "./CoreTeam/Khushi.jpg",
      post: "Convenor",
      insta: "https://www.instagram.com/khushi_gupta1212?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkdin: "https://www.linkedin.com/in/khushi-gupta-758b22226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "./CoreTeam/Razeen.jpg",
      post: "Treasurer",
      insta: "https://instagram.com/rzen47_/",
      linkdin: "https://www.linkedin.com/in/razeen-aman-ba854922a/",
    },
    {
      img: "./CoreTeam/Aniket.jpg",
      post: "Designer",
      insta: "https://www.instagram.com/annie2__8/",
      linkdin: "https://www.linkedin.com/in/annie-kate28/",
    },
    {
      img: "./CoreTeam/Namrata.jpg",
      post: "Graphics Lead",
      insta: "https://www.instagram.com/_namratab_/",
      linkdin: "https://linkedin.com/in/namrata-biswas-762005222/",
    },
    {
      img: "./CoreTeam/Dibya.jpg",
      post: "PR Lead",
      insta: "https://www.instagram.com/ig.dibyajyoti/",
      linkdin: "https://www.linkedin.com/in/dibyajyoti-biswas-52b167257",
    },
    
    {
      img: "./CoreTeam/Sayantika.jpg",
      post: "Content Lead",
      insta: "https://www.instagram.com/sayanxtika?igsh=YWdlaGF3ZzhjMzR6",
      linkdin: "https://www.linkedin.com/in/sayantika-biswas-a2707a271/",
    },
    {
      img: "./CoreTeam/Suvam.jpg",
      post: "PR Lead",
      insta: "https://www.instagram.com/vamusxd/",
      linkdin: "https://www.linkedin.com/in/suvam-das-aa7318235/",
    },
    
    
    
    {
      img: "./CoreTeam/Arka.jpg",
      post: "Tech Lead",
      insta: "https://www.instagram.com/arc_run_dev/",
      linkdin: "https://www.linkedin.com/in/arka-probha-roy-027169235/",
    },
    
    {
      img: "./CoreTeam/Soumanti.jpg",
      post: "Cultural Lead",
      insta: "https://www.instagram.com/soumanti_koley?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkdin: "https://www.linkedin.com/in/soumanti-koley-3110a2271/",
    },

    {
      img: "./CoreTeam/Suparno.jpg",
      post: "Co Convenor",
      insta: "https://www.instagram.com/octalaser?igsh=OXpvMTZucXhycGly",
      linkdin: "https://www.linkedin.com/in/suparno-chatterjee-3a1aa1299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "./CoreTeam/Kunal.jpg",
      post: "Co Convenor",
      insta: "https://www.instagram.com/weirdkun_?igsh=MThsOWZrbjlueXl4dQ==",
      linkdin: "https://www.linkedin.com/in/kunal-das-013979246/",
    },
    {
      img: "./CoreTeam/Ritesh.jpg",
      post: "Tech Co-Lead",
      insta: "https://www.instagram.com/__ritesh.dev?igsh=cmI5NDQzNWgwazQ5",
      linkdin: "https://www.linkedin.com/in/ritesh-pramanik-8ba316260?",
    },
    {
      img: "./CoreTeam/Satwick.jpg",
      post: "Tech Co-lead",
      insta: "https://www.instagram.com/sat_w_ick?igsh=OW81cHZsZTk0c3o1",
      linkdin: "https://www.linkedin.com/in/satwick-mukherjee-b13419261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "./CoreTeam/Soumojit.jpg",
      post: "Graphics Co-Lead",
      insta: "https://www.instagram.com/soumojit_shome/",
      linkdin: "https://www.linkedin.com/in/soumojit-shome",
    },
    
    {
      img: "./CoreTeam/Debojyoti.jpg",
      post: "Graphics Co-Lead",
      insta: "https://www.instagram.com/_debojyotiiii_____/",
      linkdin: "https://www.linkedin.com/in/debojyotide007/",
    },


  {
    img: "./CoreTeam/Shreeya.jpg",
    post: "Cultural Co-Lead",
    insta: "https://www.instagram.com/s.h.r.e.e.y.a__?igsh=MTlzbDY5c3oyc2Vybg",
    linkdin: "https://www.linkedin.com/in/shreeya-chattopadhyay-681b86265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: "./CoreTeam/Rudra.jpg",
    post: "Volunteer Co-Lead",
    insta: "https://www.instagram.com/_dope_a_mine__/",
    linkdin: "https://www.linkedin.com/in/rudra-mukherjee-871650237",
  },
  
  
  {
    img: "./CoreTeam/Tanmoy.jpg",
    post: "Content Co-Lead",
    insta: "https://www.instagram.com/tanmay.ghosh007?igsh=dmdjaGxiemlqeXFx",
    linkdin: "https://www.linkedin.com/in/tanmay-ghosh-b1b19b271",
  },
  {
    img: "./CoreTeam/Priyanjali.jpg",
    post: "Content Co-Lead",
    insta: "https://www.instagram.com/thy_hiems?igsh=MTU1a3F3aDNydmlqcA==",
    linkdin: "",
  },
  {
    img: "./CoreTeam/RitamG.jpg",
    post: "Treasurer Co-Lead",
    insta: "https://www.instagram.com/ritamghosh51867/",
    linkdin: "https://www.linkedin.com/in/ritam-ghosh-6b412a1a8/",
  },
  {
    img: "./CoreTeam/Ashmit.jpg",
    post: "PR Co-Lead",
    insta: "https://www.instagram.com/_ash_terix_?igsh=MW9vdXhidm5iYXZiNw==",
    linkdin: "https://www.linkedin.com/in/asmit-barik-810440274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  
  {
    img: "./CoreTeam/Subhadeep.jpg",
    post: "Team Adviser",
    insta: "https://www.instagram.com/__its_subha_/",
    linkdin: "https://www.linkedin.com/in/subhadeep-dutta-a8564a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: "./CoreTeam/ANushka.jpg",
    post: "Team Adviser",
    insta: "https://www.instagram.com/anushka_hazra?igsh=MXQ5dTh5OG1vaHgydQ",
    linkdin: "https://www.linkedin.com/in/anushka-hazra-15b4a7205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: "./CoreTeam/Ankit.jpg",
    post: "Team Adviser",
    insta: "https://www.instagram.com/princeoftheworld_ankit",
    linkdin: "https://www.linkedin.com/in/ankit-bhattacharjee-9b7532205",
  },
]
  return (
    <div className="about_page">
      <Preloader/>
      <Navbar />
      
      
      
      
      <div className="main_container flex flex-col lg:flex-row">
      <div className="sm:block lg:block left_about flex-[30%] mb-[-150px] inset-y-0 p-4 z-40 mt-[-90px] ml-0 sticky h-screen overflow-y-auto h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border border-gray-100">
          <div className="text-black  m-auto mt-[60px] lg:mt-12 lg:mt-[120px] m-auto lg:ml-[27%] lg:mr-[-200px]  ">
            <h1 className="font-medium mb-4 lg:text-left lg:text-[40px] text-[36px] " style={{ fontFamily: 'Poppins, sans-serif' }}>Meet the Team</h1>
            <p className="hidden lg:block lg:text-left lg:text-[20px] " style={{ fontFamily: 'Poppins, sans-serif' }}>
            Discover the faces behind our Event. <br />
            Passionate minds, ready to connect.
            </p>
          </div>
          <div className="hidden lg:block left_down ml-[27%] mt-[90%]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="socials flex gap-2.5 w-[130px] pb-2">
              <a href="https://www.linkedin.com/company/sceceaot/" target="_blank"><img src={ldn} alt="" /></a>
              <a href="https://www.facebook.com/sceceaot?mibextid=ZbWKwL" target="_blank"><img src={facebook} alt="" /></a>
              <a href="https://www.instagram.com/sceceaot?igsh=MWJ2dGFxMzE3em1mNA==" target="_blank"><img src={Insta} alt="" /></a>
              <a href="https://twitter.com/IeiEce?t=HCqJbpzs6eDTllAnwr866Q&s=09" target="_blank"><img src={X} alt="" /></a>
              <a href="https://discord.gg/8qJBt5pby5" target="_blank"><img src={DC} alt=""/></a>
            </div>
            <div className="texts_sc text-left">
              <p>
                IEI Students’ Chapter ECE <br />
                Academy of Technology
              </p>
            </div>
          </div>
        </div>

        <div className="right_pics  flex-[60%]  p-4 ">
          <h1 className="hidden lg:block text-black font-medium w-20px text-[40px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Core Team</h1>
          <p className="lg:hidden lg:text-left lg:text-[20px] " style={{ fontFamily: 'Poppins, sans-serif' }}>
            Discover the faces behind our Event.
            <br />
            Passionate minds, ready to connect.
            </p>
            <div className="temp">

            </div>
          
          
          <div  className="card_container justify-center lg:gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-auto lg:w-[700px] w-[300px] ">
            {team.map((card, id) => (
              <div className="bg-green">
                <div
                  key={id}
                  className="flex flex-col w-[100%] cursor-pointer text-black justify-center py-2 px-4 text-center items-center mt-12 rounded-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px] transition-transform hover:scale-105 hover:border-b-[6px] hover:border-b-[#a292e846] bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border border-gray-100"
                >
                  <img
                    src={require(`${card.img}`)}
                    alt="box_img"
                    className="w-[100%] mb-4 rounded-[25px] p-auto border-[2px] mt-[10px]"
                  />
                 
                  <p className="text-[16px] font-medium uppercase mb-7 text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {card.post}
                  </p>
                  <div className="flex gap-2 mb-[20px]">
                    <a href={card.linkdin} target="_blank">
                      <img className="w-[30px]" src={Linkdin} alt="" />
                    </a>
                    <a href={card.insta} target="_blank">
                      <img className="w-[30px]" src={Insta} alt="" />
                    </a>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
