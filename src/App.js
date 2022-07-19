import React from 'react';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Rides from'./pages/Rides'
import ContactUs from './pages/ContactUs'
import Faq from './pages/Faq'
import NavBar from './components/NavBar';



function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        <NavBar/>
       <Home/>
      </div>
     
    </BrowserRouter>
    
  );
}

export default App;
