import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import '../css/NavBar.css';


const NavBar = ( )=>{
    const [showMenu, setShowMenu]=useState(false);
    
    const toggleMenu =()=>{
        setShowMenu(!showMenu);
    }



    return (
        <nav className='navbar-container'>
            <div className='logo'> 
             <a href='#' ><img src={require ('../images/logo.png')}  className='logo'alt=""/></a>
             </div>
             <menu>
                <ul className='nav-bar-links' >
                    <li><a href='#'>Rides</a></li>
                    <li><a href='/services'>Services</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <a href='#' ><img src={require ('../images/User_icon.png')} className="user-icon"  alt=""/></a>
                </ul>
            </menu>
           {/*} <div className='menu-icons' onClick={toggleMenu}>
                {
                    showMenu ?( <img src={require ('../images/User_icon.png')} className="user-icon"  alt=""/>) : 
                    (<img src={require ('../images/list-nav.png')}  className='list-nav-menu'alt=""/>)
                }
            </div>
             <ul className='nav-links' id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>*/}
        </nav>
    )
}


export default NavBar