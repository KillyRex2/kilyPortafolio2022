import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import MNC from '../../assets/mnc.png'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">KILLYREX</a>

      <ul className="permalinks">
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#portafolio">Portafolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/josepacmangarcia.arce/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/justkily1/"><FiInstagram/></a>
        <a href="https://twitter.com/killyrex"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copy">
        <img src={MNC} alt="maniacorp" className="maniacorp-img" />
        <small>&copy; MANIACORP® 2022. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer