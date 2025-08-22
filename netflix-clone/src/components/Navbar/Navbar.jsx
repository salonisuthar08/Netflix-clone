import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix.logo.jpg'
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import { FaSearch, FaBell } from "react-icons/fa";

import profile from "../../assets/profile.icon.png";
import caret from "../../assets/caret.icon.png";


const Navbar = () => {
  return (
    <div className='navbar'>
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
           <p>  Sign Out of Netflix </p>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
