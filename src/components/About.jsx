import React from 'react'
import './About.scss'
import { FaCloudArrowDown } from "react-icons/fa6";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
export const About = () => {
    const [typeEffect] = useTypewriter({
        words: ['ABOUT ME'],
        loop: {},
        typespeed: 100,
        deletespeed: 40
    });
    return (
        <div className='main-title'>
            <div className='main-heading'> {typeEffect} <span><Cursor cursorColor='gray'/></span><span className='bg-text'>My Stats</span></div>
            <div className='containerss'>
            <div className="about-container">
                <div className="left-about">
                    <h4>Personal Background Summary</h4>
                    <p>A forward-thinking and ambitious computer science aficionado with a determined aspiration to excel as a full-stack developer. Currently advancing through the third year of a Bachelor of Technology degree in Computer Science.
                        
                    My commitment to proficiency in front-end technologies is complemented by a fervent enthusiasm to intricately engage with back-end systems, ensuring the delivery of impeccable end-to-end user experiences.</p>
                    <div className="btn-con">
                        <a href="https://drive.google.com/file/d/1AX6YE9HNnnpi3y7tylJzzL7sg28oCHa0/view?usp=sharing" className='main-btn'>
                            <span className='btn-text'>Download Resume</span>
                            <span className='btn-icon'><FaCloudArrowDown /></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">15+</p>
                            <p className="small-text">projects <br /> completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">415+</p>
                            <p className="small-text">leetcode problems <br /> completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">5+</p>
                            <p className="small-text"> star problem <br /> solving</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">100+</p>
                            <p className="small-text">wpm <br /> typing speed</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className='html'></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">java</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className='java'></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className='javascript'></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Reactjs</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className='react'></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">python</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className='python'></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">nodejs</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className='node'></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <h4 className='stat-title'>Career Progression Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                    <IoSchoolSharp className='icon' color='red' size={35}/>
                    </div>
                    <p className="tl-duration">2021 - present</p>
                    <h5>Bachelor of Technology (B. Tech)<span> - PSIT KANPUR</span></h5>
                    <p>
                       Currently i am persuing bachelor of technology from PSIT, kanpur Affiliated by Dr. A.P.J Abdul Kalam Technical University.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                    <FaSchool className='icon' color='red' size={35}/>
                    </div>
                    <p className="tl-duration">2019 - 2020</p>
                    <h5>HIGHER SECONDARY EDUCATION<span> - O.V.S Inter college</span></h5>
                    <p>
                       I have done my higher secondary education from O.V.S Inter college kanpur in given timeline mention above.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                    <GiSchoolBag  className='icon' color='red' size={35}/>
                    </div>
                    <p className="tl-duration">2017 - 2018</p>
                    <h5>SECONDARY EDUCATION<span> - c.p.v.n inter college</span></h5>
                    <p>
                       I have done my secondary education from CPVN Inter college farrukhabad Uttar Pradesh.
                    </p>
                </div>
              
            </div>
            </div>
        </div>
    )
}
