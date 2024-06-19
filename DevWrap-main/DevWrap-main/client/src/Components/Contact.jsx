import React, { useState } from 'react'
import Navbar from './Navbar'
import Linkdin from "./Assets/linkdin.png";
import facebook from "./Assets/facebook.png";
import ldn from "./Assets/linkedin.png";
import X from "./Assets/x2.png";
import Insta from "./Assets/instagram.png";
import DC from "./Assets/discord.png";
import "./BG.css"
import Preloader from './Preloader';

const Contact = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSendClick = () => {
    setShowPopUp(true);
    // You can also add your form submission logic here
  };

  return (
    <div className='contact'>
      <Preloader/>
      <Navbar />
      <div className="main_container flex flex-col lg:flex-row pb-[5px]">
        <div className="sm:block lg:block left_about flex-[30%] mb-[-150px] inset-y-0 p-4 z-40 mt-[-90px] ml-0 sticky h-screen overflow-y-auto h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border border-gray-100">
          <div className="text-black  m-auto mt-[60px] lg:mt-12 lg:mt-[120px] m-auto lg:ml-[27%] lg:mr-[-200px]  ">
            <h1 className="font-medium mb-4 lg:text-left lg:text-[40px] text-[36px] " style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
            <p className="hidden lg:block lg:text-left lg:text-[20px] " style={{ fontFamily: 'Poppins, sans-serif' }}>
              Have questions or ideas? Reach out! <br />
              We're here to listen and assist.
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

        <div className="flex right_form flex-[60%] p-4 pb-[200px] items-center justify-center">
          <div className="right_card lg:h-[550px] lg:w-[400px] mt-[10%] rounded-[16px] bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <form action="https://script.google.com/macros/s/AKfycbzAohzP6cuS_s8qg63a3AbMZpxZ7vB4awhvgRQasbURvI7KhQyod5e7fc51U_zA_ke_NA/exec" method="POST" className='flex flex-col gap-6 m-auto mt-[60px] mb-[60px] ml-[60px] mr-[60px] items-center'>
  <input type="text" name="name" placeholder="Name" className='p-[30px] h-[50px] w-[300px] rounded-[8px] bg-white-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 center-placeholder' />
  <input 
    type="email" 
    name="email" 
    placeholder="Email" 
    className='p-[30px] h-[50px] w-[300px] rounded-[8px] bg-white-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 center-placeholder' 
    pattern="[a-z0-9._%+-]+@aot.edu.in" 
    title="Please enter a valid email address ending with @aot.edu.in"
  />
  <input type="text" name="message" placeholder="Message" className='p-[30px] h-[200px] w-[300px] rounded-[8px] bg-white-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 center-placeholder' />
  <div className="btn bg-[#ffffff21] text-[#2b2b2b] rounded-[25px] w-[100px] p-2 border border-black hover:bg-[#2b2b2b] hover:text-white">
    <button className=''>Send</button>
  </div>
</form>
          
        </div>
      </div>
      {showPopUp && (
        <div className="sending-popup">
          <p>Sending...</p>
        </div>
      )}
    </div>
    </div>
     
  );
}

export default Contact
