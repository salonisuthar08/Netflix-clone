import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix.logo.2.svg'
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import { FaSearch, FaBell } from "react-icons/fa";

import profile from "../../assets/profile.icon.png";
import caret from "../../assets/caret.icon.png";
import { logout } from '../../firebase';


const Navbar = () => {
  const navRef =useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
    if(window.scrollY>=80){
      navRef.current.classList.add('nav-dark')
    }
    else{
      navRef.current.classList.remove('nav-dark')
    }
    })
  } ,[])
  return (
    <div ref={navRef}  className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browser by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch size={20} style={{ marginRight: "10px" }} />  
           
        {/* <img src={search} alt="icon" /> */}
        <p>Children</p>
        <FaBell size={20} /> 
        {/* <img src={bell} alt=" icon" /> */}
        <div className="navbar-profile">
          <img src= {profile} alt="profile" />
          <img src= {caret} alt="" />

          <div className="drop-down">
           <p onClick={()=>{logout()}}>  Sign Out of Netflix </p>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
