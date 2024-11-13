import React, { useState } from 'react'
import siliconLogoLight from '../assets/images/siliconLogo.svg'
import siliconLogoDark from '../assets/images/siliconLogoDarkmode.svg'
import iconSignIn from '../assets/images/icon-sign-in.svg'
import mobileMenu from '../assets/images/mobile-menu.svg'
import DarkmodeSwitch from './DarkmodeSwitch'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleMenu = () => {
        setIsExpanded (prev => !prev)
    }

    const closeMenu = () => {
        setIsExpanded(false)
    }



  return (
    <header>
        <div className="container header-container"> 

            <Link id="logo" to="/">
                <img className="silicon-logo-lightmode" src={siliconLogoLight} alt="silicon logotype" />
                <img className="silicon-logo-darkmode" src={siliconLogoDark} alt="silicon logotype"/>
            </Link>

            <nav onClick={toggleMenu} id="main-menu"  className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <DarkmodeSwitch />
    
            <a  className="btn-primary" id="auth-signin" href="#">
                <img src={iconSignIn} alt="user icon"/>
                <span>Sign in / up</span>
            </a>

            <button onClick={toggleMenu} className="btn-mobile" aria-expanded={isExpanded ? 'true' : 'false'}>
                <img src={mobileMenu} alt="mobile menu"/>
            </button>

            <ul className='mobile-menu'>
                <li>
                    <Link onClick={closeMenu} className='mobile-menu-link' to={'/'}>Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className='mobile-menu-link' to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header