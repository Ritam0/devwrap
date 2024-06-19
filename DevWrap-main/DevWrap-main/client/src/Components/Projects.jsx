import React from 'react'
import Preloader from './Preloader'
import Navbar from './Navbar'

const Projects = () => {
  return (
    <div className='projects_bg width-[100vw] height-[500px]'>
        <Preloader/>
      <Navbar/>
      <h1 className='text-black height-[100vh] mt-[50%] lg:mt-[19%] lg:pb-[320px] text-[36px] pb-[400px]' style={{ fontFamily: 'Poppins, sans-serif' }}>Coming soon.....</h1>
    </div>
  )
}

export default Projects
