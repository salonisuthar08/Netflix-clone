import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
       <FaFacebook />
       <FaInstagram />
       <FaTwitter />
       <FaYoutube />
      </div>
      <ul>
        <li>Audio Description</li>
         <li>Help Centre</li>
         <li>Media Centre</li>
         <li>Gift Card</li>
         <li>Privacy</li>
         <li>Terms and Uses</li>
         <li>Contact Us</li>
         
        </ul>
        <p className='copywrite-text'>&copy; 1997-2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer
