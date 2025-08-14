import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import homepage from '../../assets/homepage.bg N.webp';
import hometitle from '../../assets/home-title.jpg';
import { IoIosPlayCircle } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import title from '../../components/Title/Title';
import Title from '../../components/Title/Title'; 

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src= {homepage} alt="" className='banner-img' />
        <div className="hero-caption">
         
          <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
        <div className="hero-btn">
          <button className='btn'> <IoIosPlayCircle /> Play</button>
          <button className='btn dark-btn'><IoMdInformationCircleOutline /> More Info </button>
        </div>
        <Title/>
        </div>
       
      </div>
    </div>
    
  )
}

export default Home
