import React from 'react'
import './Footer.css'
import footer_logo from '../assets/ME.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>BINESH</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <a href="https://www.instagram.com/__binesh__/"><img src={instagram_icon}/></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://au.pinterest.com/bineshtricky/"><img src={pinterest_icon}/></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://web.whatsapp.com/"><img src={whatsapp_icon}/></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
