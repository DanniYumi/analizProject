import React from 'react'
import '../css/Header.css';

const Header = () => {
  return (
    <section id="header">
        <div className='containerHeader'>
            <div className='header-left'>
                <div className='headerl-left-text'>
                Become one of our loyal clients
                </div>
                <a href='#' className={'btn ${btnClass}'}>
                    Sign Up Now
                </a>
            </div>
            <div className='header-right'>
                <img src={require ('../images/images.jpeg')} className="header-img"></img>
            </div>
        </div>
    </section>
  )
}

export default Header