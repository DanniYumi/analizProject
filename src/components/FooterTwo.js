import React from 'react'
import {Link} from 'react-router-dom'
import '../css/FooterTwo.css'


const FooterTwo = () => {
  return (
    <div className='container-footer2'>
         <menu>
                <ul className='nav-links-footer'>
                    <li><a href='#'>Terms And Conditions</a></li>
                    <li><a href='#'>FAQ's</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    
                </ul>
            </menu>
            <div className='social-media'>
                <div className='social-title'>
                    Follow Us on Social Media
                </div>
                <div className='social-media-links'>
                    <Link to="#"><img src={require ('../images/instagram.png')} alt="instagram-icon"></img></Link> 
                    <Link to="#"><img src={require ('../images/facebook.png')} alt="facebook-icon"></img></Link>
                    <Link to="#"><img src={require ('../images/linkedin.png')} alt="linkedin-icon"></img></Link>
                </div>
            </div>
    </div>
  )
}

export default FooterTwo