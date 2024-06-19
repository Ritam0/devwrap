import React, { useState } from "react";
import Logo from "./Assets/devlogo.png";
import Linkdin from "./Assets/linkdin.png";
import facebook from "./Assets/facebook.png";
import ldn from "./Assets/linkedin.png";
import X from "./Assets/x2.png";
import DC from "./Assets/discord.png";
import Insta from "./Assets/instagram.png";
import { Divide as Hamburger } from "hamburger-react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSubMenuOpen_Judge, setSubMenuOpen_Judge] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSubMenuOpen(false); // Close sub-menu on main menu toggle
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  const toggleSubMenu_Judge = () => {
    setSubMenuOpen_Judge(!isSubMenuOpen_Judge);
  };

  return (
    <>
      <nav className="bg-[#b0a5e000] p-4 sticky top-0 z-[900]">
        <div className="container mx-auto flex items-start justify-between">
          {/* Logo on the left */}
          <div className="text-white text-lg font-bold">
            <Link to="/">
              <img src={Logo} alt="" className="w-[50px] mt-[10px] lg:mt-[5px] p-auto" />
            </Link>
          </div>

          {/* Menu options for larger screens */}
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className={`lg:flex items-center m-auto gap-8 text-[25px] hidden xl:flex space-x-4 ${
              isMenuOpen ? "flex m-auto mt-auto" : "hidden"
            }`}
          >
            <div className="relative group gap-2 ml-[30%]">
              <button
                onClick={toggleSubMenu}
                className="text-black text-[20px] font-normal hover:text-[#757171d2] focus:outline-none"
              >
                <span className="text-[#37AA99] font-bold">.</span>menu
              </button>

              {/* Dropdown content */}
              <div
                className={`absolute ${
                  isSubMenuOpen ? "block" : "hidden"
                } z-[999] text-black mt-2 p-2 space-y-2 rounded-md shadow-lg  bg-[#ffffff21]`}
                onMouseLeave={() => setSubMenuOpen(false)}
              >
                <Link
                  to="/rules"
                  className=" bg-[#ffffff21] block font-normal text-[16px] border-solid border-2 border-b-[#37AA99] hover:border-[#37AA99] rounded-lg px-4 py-2"
                >
                  Rules
                </Link>
                <Link
                  to="/timeline"
                  className=" bg-[#ffffff21] block font-normal text-[16px] border-solid border-2 border-b-[#37AA99] hover:border-[#37AA99] rounded-lg px-4 py-2"
                >
                  Timelines
                </Link>
                <Link
                  to="/tracks"
                  className=" bg-[#ffffff21] block font-normal text-[16px] border-solid border-2 border-b-[#37AA99] hover:border-[#37AA99] rounded-lg px-4 py-2"
                >
                  Tracks/Prizes
                </Link>
                <Link
                  to="/projects"
                  className=" bg-[#ffffff21] block font-normal text-[16px] border-solid border-2 border-b-[#37AA99] hover:border-[#37AA99] rounded-lg px-4 py-2"
                >
                  Projects
                </Link>
                
              </div>
            </div>

            <NavLink
              to="/judges"
              className="text-black text-[20px] font-normal hover:text-[#757171d2]"
              activeClassName="active"
            >
              <span className="text-[#37AA99] font-bold">.</span>judges
            </NavLink>
            
            <NavLink
              to="/leaderboard"
              className="text-black text-[20px] font-normal hover:text-[#757171d2]"
              activeClassName="active"
            >
              <span className="text-[#37AA99] font-bold">.</span>leaderboard
            </NavLink>

            <NavLink
              to="/about"
              className="text-black text-[20px] font-normal hover:text-[#757171d2] active:border"
              activeClassName="active"
            >
              <span className="text-[#37AA99] font-bold">.</span>about
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black text-[20px] font-normal hover:text-[#757171d2]"
              activeClassName="active"
            >
              <span className="text-[#37AA99] font-bold">.</span>contact
            </NavLink>

{/* huehue */}
            
          </div>
          {/* https://forms.gle/cgxEvdcsKxTARHSm6 */}
          <button className="bg-[#ffffff21] p-[7px] ml-auto text-black border border-black rounded-[25px] hidden lg:block hover:bg-[#2b2b2b] hover:text-white ">
          <a href="https://forms.gle/Pg9JUNvbrQJnHxTX6" target="_blank" className=" text-[20px]  p-[24px] ">
                Register
              </a>
          </button>

          {/* Hamburger menu for smaller screens */}
          <div
            className={
              `burger sticky xl:hidden lg:hidden 2xl:hidden z-[1000] `
            }>
            <Hamburger onToggle={toggleMenu} />
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`bg-[#ffffff] lg:hidden p-4 rounded-md shadow-lg absolute top-0 right-0 flex flex-col justify-between z-[999] h-screen w-[300px] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 `}
          >
            <div className="flex flex-col gap-3 items-start mt-12">
              <div className="relative group flex flex-col w-[100%]">
                <button
                  onClick={toggleSubMenu}
                  className="text-black text-[24px] font-normal hover:text-[#757171d2] focus:outline-none mr-auto"
                >
                  <span className="text-[#37AA99] font-bold">.</span>menu
                </button>

                {/* Dropdown content */}
                <div
                  className={` ${
                    isSubMenuOpen ? "block" : "hidden"
                  } z-[999] text-black mt-2 p-2 space-y-2 rounded-md shadow-none  bg-[#ffffff21]`}
                  onMouseLeave={() => setSubMenuOpen(false)}
                >
                  <Link
                    to="/rules"
                    className=" bg-[#ffffff21] block font-normal text-left text-[16px] border-solid border-2 rounded-none border-b-[#37AA99] hover:border-[#37AA99]  px-4 py-2"
                  >
                    Rules
                  </Link>
                  <Link
                    to="/timeline"
                    className=" bg-[#ffffff21] block font-normal text-left text-[16px] border-solid border-2 rounded-none border-b-[#37AA99] hover:border-[#37AA99]  px-4 py-2"
                  >
                    Timelines
                  </Link>
                  <Link
                    to="/tracks"
                    className=" bg-[#ffffff21] block font-normal text-left text-[16px] border-solid border-2 rounded-none border-b-[#37AA99] hover:border-[#37AA99]  px-4 py-2"
                  >
                    Tracks/Prizes
                  </Link>
                  <Link
                    to="/projects"
                    className=" bg-[#ffffff21] block font-normal text-left text-[16px] border-solid border-2 rounded-none border-b-[#37AA99] hover:border-[#37AA99]  px-4 py-2"
                  >
                    Projects
                  </Link>
                  
                </div>
              </div>
              <Link
                to="/judges"
                className="text-black text-[24px] font-normal hover:text-[#757171d2]"
              >
                <span className="text-[#37AA99] font-bold">.</span>judges
              </Link>
              <Link
                to="/leaderboard"
                className="text-black text-[24px] font-normal hover:text-[#757171d2]"
              >
                <span className="text-[#37AA99] font-bold">.</span>leaderboard
              </Link>

              <Link
                to="/about"
                className="text-black text-[24px] font-normal hover:text-[#757171d2]"
              >
                <span className="text-[#37AA99] font-bold">.</span>about
              </Link>
              <Link
                to="/contact"
                className="text-black text-[24px] font-normal hover:text-[#757171d2]"
              >
                <span className="text-[#37AA99] font-bold">.</span>contact
              </Link>
              
            </div>
            {/* <button className="bg-[#ffffff21] w-[100%] p-[7px] ml-auto text-black border border-black rounded-[25px] hover:bg-[#2b2b2b] hover:text-white mt-[330px] w-[200px] ml-[10%]">
              <a href="https://registration-form-sepia-nine.vercel.app/" target="_blank" className=" text-[20px]  p-[24px] ">
                Register
              </a>
            </button> */}
            <div className="copyright mb-[10px]">
            <div className="socials flex gap-2.5 w-[100px] pb-2 text-[]">
                <a href="https://www.linkedin.com/company/sceceaot/" target="_blank"><img src={ldn} alt="" /></a>
                <a href=" https://www.facebook.com/sceceaot?mibextid=ZbWKwL" target="_blank"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/sceceaot?igsh=MWJ2dGFxMzE3em1mNA==" target="_blank"><img src={Insta} alt="" /></a>
                <a href="https://twitter.com/IeiEce?t=HCqJbpzs6eDTllAnwr866Q&s=09" target="_blank"><img src={X} alt="" /></a>
                <a href="https://discord.gg/8qJBt5pby5" target="_blank"><img src={DC} alt=""/></a>
            </div>
            <div className="texts_sc text-left">
                <p>
              
IEI Students’ Chapter ECE
<br />
Academy of Technology
                </p>
            </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;