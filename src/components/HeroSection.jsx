import React from 'react'
import AppStoreLight from '../assets/images/appstore-light-desktop.svg'
import AppStoreDark from '../assets/images/appstore-dark.svg'
import GooglePlayLight from '../assets/images/googleplay-light-desktop.svg'
import GooglePlayDark from '../assets/images/googleplay-dark.svg'
import VectorDown from '../assets/images/Vector-nedåt.svg'
import Mobile1 from '../assets/images/mobile-1.svg'

const HeroSection = () => {
  return (
    <section id="hero-section"className="hero-section section">
        <div className="container container-hero">

            <div className="headliner">
                <h1>Manage All Your Money in One App</h1>
            </div>   
                
                
            <div className="content">

                <p className="h1-paragraph"> We offer you a new generation of the mobile
                    banking. Save, spend & manage money in your pocket.</p>

                <div className="download">
                    <button className="btn-download">
                        <a className="apptore-light-img" href="#"><img src={AppStoreLight} alt="app store"/></a>
                        <a  className="apptore-dark-img"href="#"><img src={AppStoreDark} alt="app store"/></a>
                    </button>
                    <button className="btn-download">
                        <a className="googleplay-light-img" href="#"><img src={GooglePlayLight} alt="google play"/></a>
                        <a className="googleplay-dark-img" href="#"><img src={GooglePlayDark} alt="google play"/></a>
                    </button>
                </div>

                <div className="discover-more">
                    <a href="#">
                        <div className="vector-circle">
                            <img className="vector" src={VectorDown} alt="Read more about app features."/>
                        </div>
                    </a>
                    <a href="#">Discover more</a>
                </div>

            </div>
        
            <div className="mobile-image-1">
                <img src={Mobile1} alt="Picture of a mobile with the app running."/>
            </div>

        </div>
    </section>
  )
}

export default HeroSection