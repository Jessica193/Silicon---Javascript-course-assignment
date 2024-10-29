import React from 'react'
import MobileHowSection from '../assets/images/mobile-how-mobile.svg'
import MobileHowTablet from '../assets/images/mobile-how-tablet.svg'
import MobileHowDesktop from '../assets/images/mobile-how-desktop.svg'


const HowSection = () => {
  return (
    <section className="how-section section">
        <div className="container container-how">
            <h2 className="h2-how-section">How Does It Work?</h2>

            <div className="mobile-images-mobile">
                <div>
                    <img src={MobileHowSection} alt="mobile with app running"/>
                </div>
            </div>

            <div className="mobile-images-tablet">
            
                    <img src={MobileHowTablet} alt="3 mobiles with app running"/>
                
            </div>

            <div className="mobile-images-desktop">
                <div>
                    <img src={MobileHowDesktop} alt="3 mobiles with app running"/>
                </div>
            </div>

            <div className="how-content-mobile">
                <h5>Transfers to people from
                    your contact list</h5>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis
                    ultrices. Pellentesque volutpat ligula est. Mattis
                    fermentum, at nec lacus.</p>
            </div>

            <div className="how-content-tablet">
                <h5>Step 3. Transfers to people from your
                    contact list</h5>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                    Pellentesque volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>

            <div className="how-content-desktop">
                <h5>Latest transaction history</h5>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            </div>

        </div>

    </section>
  )
}

export default HowSection