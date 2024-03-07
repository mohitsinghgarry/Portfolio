import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    const [typeEffect] = useTypewriter({
        words: ['WEB-DEVELOPER', 'PROGRAMMER'],
        loop: {},
        typespeed: 100,
        deletespeed: 40
    })
    return (
        <div className="banner-text" id='home'>
            <div className='inside-ban'>
            <h1>Hi!,I'm <span className='owner-name-info'>MOHIT SINGH</span><br/><span className='typing'>{typeEffect}<Cursor cursorColor='gray'/></span></h1>
            </div>
            <div className='inside-banner'>
                <p className="para">
                Hey, I'm Mohit Singh, a passionate frontend developer blending creativity with logic to craft seamless digital experiences. With expertise in both front-end and back-end realms, I bring a fresh perspective to problem-solving. Explore my projects on GitHub for a taste of my coding journey
                </p>
            </div>
        </div>

    )
}
export default Banner;