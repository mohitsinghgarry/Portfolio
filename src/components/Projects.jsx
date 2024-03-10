import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import './Projects.scss'
export const Projects = () => {
  const [typeEffect] = useTypewriter({
    words: ['My Projects'],
    loop: {},
    typespeed: 100,
    deletespeed: 40
});
  return (
    <div className='main-title'>
       <div className='main-heading'> {typeEffect} <span><Cursor cursorColor='gray'/></span><span className='bg-text'>Work</span></div>
       <p className="port-text">
       Here is a compilation of my professional achievements across diverse programming languages.
       </p>
       <div className="portfolios">
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="src\assets\img\nature.jpg" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3>Project source</h3>
            <div className="icons">
              <a href="http://www.google.com" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="http://" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}
