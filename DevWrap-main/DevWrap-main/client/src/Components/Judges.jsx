import React from 'react'
import Navbar from './Navbar'
import judge_soon from "./Assets/Judge_soon.jpg"
import Preloader from './Preloader'
const Judges = () => {
  return (
    <div className='judge width-[100vw] height-[500px]'>
        <Preloader/>
      <Navbar/>
      <h1 className='text-black height-[100vh] mt-[50%] lg:mt-[19%] lg:pb-[320px] text-[36px] pb-[400px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Coming soon.....</h1>
    </div>
  )
}

export default Judges
