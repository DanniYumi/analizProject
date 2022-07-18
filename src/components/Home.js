import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import FooterTwo from './FooterTwo'

import '../css/Home.css'

const Home = () => {
  return (
    <div >
        <NavBar/>
        <Header/>
        <div className="body-title">
              How to ride with us?
          </div>
      <div className="body-container-steps">
    
        <div className='step-container'>
          <div className="steps-image">
                <img src={require ('../images/service-image.png')} alt="service-img"></img>
            </div>   
               <div className="steps-title">
                  Services
                  </div>
                   <div className="steps-text">
                   Check all the services we offer and choose the one better fit your needs.
                  </div>
                  </div>
                  <div className='step-container'>
          <div className="steps-image">
                <img src={require ('../images/availability.png')} alt="availability-img"></img>
            </div>   
               <div className="steps-title">
                  Rides
                  </div>
                   <div className="steps-text">
                   Ask for availability and cottation for the service.
                  </div>
                  </div>
                  <div className='step-container'>
          <div className="steps-image">
                <img src={require ('../images/book.png')} alt="book-img"></img>
            </div>   
               <div className="steps-title">
                  Book
                  </div>
                   <div className="steps-text">
                   Pay the fair, receive email and confirmation and enjoy your ride.
                  </div>
                  </div>
                 
              </div>
              <div className='service-box'>
              <div className='service-text'>
            Check our services and Fairs
                </div>
                <a href='/#' className='btn-service'>
                    Services
                </a>
              </div>
              
              <FooterTwo/>
    </div>
  )
}

export default Home