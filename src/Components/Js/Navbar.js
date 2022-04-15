import React, {useState} from 'react'
import {FaBars, FaTimes,FaFacebookSquare,FaTwitterSquare,FaInstagram} from 'react-icons/fa'
import { Link } from 'react-scroll'
import '../Css/Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            <div className='container'>
                <Link to="hero" className='logo'>Trek<span className='primary'>posh</span></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu not-active'}>
                    <li>
                        <Link to="about" smooth duration={100} className="navs">About Us</Link>
                    </li>
                    <li>
                        <Link to='gallery' smooth duration={100} className="navs">Gallery</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth duration={100} className="navs">Contact</Link>
                    </li>
                    <li>
                    <ul className='nav-icons'>
                    <li><a target="_blank"  rel="noreferrer" href="https://www.facebook.com/trekposh"><FaFacebookSquare className='fb'/></a></li>
                    <li><a target="_blank"  rel="noreferrer" href="https://twitter.com/trekposh"><FaTwitterSquare className='twitter'/></a></li>
                    <li><a target="_blank"  rel="noreferrer" href="https://www.instagram.com/trekposh/"><FaInstagram className='insta'/></a></li>
                    </ul>
                    </li>
       </ul>
               
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#FFFFFF'}}/>) : (<FaBars size={20} style={{color: '#FFFFFF'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
