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
            <img src="\img\inventory-management.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3  style={{fontWeight:"bold" , color:"black"}}>Inventory Pro:<span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}> Inventory Management </span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/Inventory_Management" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://frontend-inventory-managment.vercel.app/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\cartopia-img.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3  style={{fontWeight:"bold" , color:"black"}}>Cartopia :<span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}> Ecommerce shopping website</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/Ecommerce-website-cartopia" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://cartopiaecommerce.netlify.app/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\weather-img.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3  style={{fontWeight:"bold" , color:"black"}}>Weatherify : <span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}} > personalized weather webapp</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/weather-backend-new" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://weather-backend-new.onrender.com/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\jobportal.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3 style={{fontWeight:"bold" , color:"black"}}>Opportunity Orbit :<span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}>Job Portal</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/JOB_PORTAL_FRONTEND" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://opportunityorbitjobportal.netlify.app/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\twitter-homepage.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3 style={{fontWeight:"bold" , color:"black"}}>TrendSniffer :<span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}>Twitter trend scraper</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/TrendSniffer-twitter-trend-scrapper" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="#" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\tourhub.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3 style={{fontWeight:"bold" , color:"black"}}>Tour Hub :<span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}>Tour Cards demo</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/tourist-web-react" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://tourist-web-mohit.netlify.app/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="imagee">
            <img src="\img\Counterapp.png" alt="image" />
          </div>
          <div className="hover-item"> 
            <h3 style={{fontWeight:"bold" , color:"black"}}>Counter <span style={{ display:"inline-block" ,backgroundColor:"white" , fontWeight:"bold", borderRadius:"10px" , padding:"5px"}}>App</span></h3>
            <div className="icons">
              <a href="https://github.com/mohitsinghgarry/Counter-app-using-react" target="_blank">< FaGithub color='black' size={35}/></a>
              <a href="https://counter-app-mohit.netlify.app/" target="_blank"><FaLink color='black' size={35}/></a>
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}
