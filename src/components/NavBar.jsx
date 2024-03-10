import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from "/img/github.svg";
import linkedin from "/img/linkedin.svg";
import leetcode from "/img/leetcodeicon.svg";
import twitter from "/img/twitter-x.svg";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    const[theme , setTheme] = useState('dark-theme');
    const[activeLink , setActiveLink] = useState('Home');
    const[scrolled, setScroll] = useState(false);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    useEffect(()=>{
        const onscroll =()=>{
            if(window.scrollY >50) setScroll(true);
            else setScroll(false);
        }
        window.addEventListener('scroll', onscroll);
        return(()=>{
            window.removeEventListener('scroll', onscroll);
        })
    },[]);

    const onclickhandler = ()=>{
       if(theme === 'dark-theme'){
           setTheme('light-theme');
       }
       else{
           setTheme('dark-theme');
       }
    }
    useEffect(()=>{
        document.body.className = theme;
    },[theme])
   return(
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
    <Container>
    <Navbar.Brand href="./">
    <span className="owner-name">
        <span style={{color: 'red' , fontSize:'xxx-large', fontWeight:'bolder'}}>M</span>OHIT SINGH
    </span>
</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
              <NavLink to='./'  className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('Home')}>Home</NavLink>
              <NavLink to='./About' className={activeLink === 'About' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About')}>About</NavLink>
              <NavLink to='./Projects' className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</NavLink>
              <NavLink to='./ContactUs' className={activeLink === 'ContactUs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ContactUs')}>Contact Us</NavLink>
            </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a className="attribute" href="https://github.com/mohitsinghgarry"><img src={github}alt="logo" /></a>
                <a className="attribute" href="https://www.linkedin.com/in/mohit-singh-95a883225/"><img src={linkedin} alt="logo" /> </a>
                <a className="attribute" href="https://leetcode.com/Mohitsinghgarry/"><img src={leetcode}alt="logo" /></a>
                <a className="attribute" href="#"><img src={twitter} alt="logo" /></a>
            </div>
            <div className='bn'>
            <button className="vdd" onClick={onclickhandler}><span>Change Mode</span></button>
            </div>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   );
}
export default NavBar;