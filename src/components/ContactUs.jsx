import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './ContactUs.scss'
import { IoPush } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
export const ContactUs = () => {
  const [typeEffect] = useTypewriter({
    words: ['Contact Us'],
    loop: {},
    typespeed: 100,
    deletespeed: 40
  });
  return (
      <div className='main-title'>
        <div className='main-heading'> {typeEffect} <span><Cursor cursorColor='gray' /></span><span className='bg-text'>Connect</span></div>
        <div class="contact-content-con">
        <div class="left-contact">
          <h4>CONTACT ME VIA</h4>
          <p>
            I'm excited to discuss how my tech skills align with the pioneering work at your organization. Can we schedule a conversation? Thanks.
          </p>
          <div class="contact-info">
            <div class="contact-item">
              <div class="icon">
                <div className="iigg">
              <FaMapLocationDot color='black' />
                </div>
                <span>Location</span>
              </div>
              <p>
                : KANPUR , INDIA
              </p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <div className="iigg">
              <MdMarkEmailRead   color='black'/>
                </div>
                <span>Email</span>
              </div>
              <p>
                <span>: mohitsinghx4@gmail.com</span>
              </p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <div className="iigg">
              <PiStudentBold  color='black' />
                </div>
                <span>Education</span>
              </div>
              <p>
                <span>: PSIT , KANPUR</span>
              </p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <div className="iigg">
              <FaPhoneVolume  color='black' />
                </div>
                <span>Mobile Number</span>
              </div>
              <p>
                <span>: +918318244060</span>
              </p>
            </div>
            <div class="contact-item">
              <div class="icon">
               <div className="iigg">
               <FaLanguage  color='black' />
                </div> 
                <span>Languages</span>
              </div>
              <p>
                <span>: English, Hindi</span>
              </p>
            </div>
          </div>
          <div class="contact-icons">
            <div class="contact-icon">
              <a href="www.facebook.com" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="right-contact">
          <form action="https://formspree.io/f/mnqezzlo" className='contact-form' method="post">
            <div className="input-control">
              <input type="text" name='username' placeholder='USERNAME' autoComplete='off' required />
            </div>
            <div className="input-control">
              <input type="email" name='email' placeholder='YOUR EMAIL' autoComplete='off' required />
            </div>
            <div className="input-control">
              <input type="text" name='subject' placeholder='ENTER SUBJECT' autoComplete='off' required />
            </div>
            <div className="input-control">
              <textarea name="message" cols="15" rows="8" placeholder='ENTER YOUR MESSAGE...' autoComplete='off' required ></textarea>
            </div>
              <div className="btn-con">
                <div className='main-btn'>
                  <button className=' btn-text'type='submit' value='send'>SUBMIT</button>
                  <div className='btn-icon'><IoPush size={30}/></div>
                </div>
              </div>
          </form>
        </div>
      </div>
      </div>

  )
}
