import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'



function App() {
  return (
    
    <Router >
      <main className='main-container'>
        <header className='header-bg'>
            <Home/>
        </header>
        </main>
    </Router>
    
  );
}

export default App;
