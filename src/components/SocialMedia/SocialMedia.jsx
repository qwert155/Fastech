import React from 'react'
import './SocialMedia.css'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div>
        <div className="social_media">
        <div className="sM_main">
          <h3>© 2024 IT-академия Fastech</h3>
          <h3>+ 998 78 777-33-22</h3>
          <div className="icon_main_sm">
          <a href="https://www.instagram.com/fastech_it_academy/"><IoLogoInstagram className='icon_sm' /></a>
          <a href="https://fastech.uz/@fastech_it_academy"><FaTelegram  className='icon_sm' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia