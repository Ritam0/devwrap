import React from 'react';
import Navbar from './Navbar';
import Logo from "./Assets/Devwrap_Logo.png";
import "./demo.css"; 
import Preloader from './Preloader';

const Rules = () => {
  const cardList = [
    {
      img: `${Logo}`,
      title: "Rule #1",
      description:
        "Teams will get a list of projects based on both React js and html css js. These projects will contain only landing page/theme.",
    },
    {
      img: `${Logo}`,
      title: "Rule #2",
      description:
        "Teams will have to choose a repo and fork it by renameing it as TeamName_ProjectID, then clone it to their own system (tutorial will be provided).",
    },
    {
      img: `${Logo}`,
      title: "Rule #3",
      description:
        "Upgradation in the project should be done exclusively in the frontend section  i,e adding new pages/ adding new features, no extra marks will be allotted for backend or authentication system.",
    },
    {
      img: `${Logo}`,
      title: "Rule #4",
      description:
        "Project submission will be live from 4th march, 9 a.m-11a.m and the submission should be done within the deadline. A demo video of the new feature/features which is added should also be submitted.",
    },
    {
      img: `${Logo}`,
      title: "Rule #5",
      description:
        "During the combat mentors will be available on discord to assist the teams, feel free to contact them if facing any problem.",
    },
    {
      img: `${Logo}`,
      title: "Rule #6",
      description:
        "Only top 10 teams will qualify for the final combat.",
    },
  ];

  return (
    <div className='rulepage mt-[100px]'>
      <Preloader/>
      <Navbar />
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 m-auto lg:ml-[230px] ml-[50px] lg:pb-[50px] pb-[100px]">
  {cardList.map((card, id) => (
    <div
      key={id}
      className=" flex flex-col lg:w-[500px] lg:h-[500px] h-[300px] w-[300px] cursor-pointer bg-white justify-center py-2 px-4 text-center items-center mt-12   shadow-2xl md:min-h-[340px]  card-item-div max-w-screen-md min-h-[260px] hover:scale-110 hover:duration-700 bg-white-200 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border border-gray-100 rounded-[32px]"
    >
      <img src={card.img} alt="box_img" className="w-[175px] mb-4" />
      <p className="lg:text-[24px] text-[20px] font-semibold uppercase lg:mb-7 " style={{ fontFamily: 'Poppins, sans-serif' }}>{card.title}</p>
      <p className="card_desc text-[12px] lg:text-[20px] font-normal leading-2 p-[2px] lg:p-[10px] m-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {card.description}
      </p>
    </div>
  ))}
</div>


     
    </div>
  );
}

export default Rules;
