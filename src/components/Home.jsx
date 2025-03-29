import React from 'react'
import './Home.scss'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaCloudArrowDown } from "react-icons/fa6";
export const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ['WEB-DEVELOPER', 'PROGRAMMER'],
    loop: {},
    typespeed: 100,
    deletespeed: 40
});
  return (
    <div className='header-content'>
        <div className='left-header'>
            <div className="h-shape"></div>
            <div className="image">
                <img src="\img\mohitsingh.png"alt="image" />
            </div>
        </div>
        <div className="right-header">
        <h1 style={{paddingTop:'1rem'}}>Hi! ,I'm <span className='name' style={{backgroundColor:'white', borderRadius:'1rem', paddingLeft:'2px',paddingRight:'2px'}}>MOHIT SINGH</span><br/>
        <span className='typing'>{typeEffect}<Cursor cursorColor='gray'/></span>
        </h1>
        <p>
        Hey, I'm Mohit Singh, a passionate frontend developer blending creativity with logic to craft seamless digital experiences. 
        With expertise in both front-end and back-end realms, I bring a fresh perspective to problem-solving. Explore my projects on GitHub for a taste of my coding journey.
        </p>
      <div className="btn-con">
      <a href="https://drive.google.com/file/d/1AX6YE9HNnnpi3y7tylJzzL7sg28oCHa0/view?usp=sharing" className='main-btn'>
          <span className='btn-text'>Download Resume</span>
          <span className='btn-icon'><FaCloudArrowDown /></span>
        </a>
      </div>
        </div>
    </div>
  )
}
