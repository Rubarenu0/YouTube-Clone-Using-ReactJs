import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoMdDesktop } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div><GiHamburgerMenu className='icon'/></div>
        <div><IoHome className='icon'/></div>
        <div><SiYoutubeshorts className='icon'/></div>   
        <div><IoMusicalNotesSharp className='icon'/></div>   
        <div><FaRegSmileBeam className='icon'/></div>   
        <div><IoMdDesktop className='icon'/></div>    
        <div><IoIosRocket className='icon'/></div>    
        <div><BiLike className='icon'/></div>    
        <div><FaWandMagicSparkles className='icon' /></div>   
    </div>
  )
}

export default Navbar
