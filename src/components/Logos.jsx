import React from 'react'
import Logos1 from '../assets/images/logos-1.svg'
import Logos2 from '../assets/images/logos-2.svg'
import Logos3 from '../assets/images/logos-3.svg'
import Logos4 from '../assets/images/logos-4.svg'
import Logos5 from '../assets/images/logos-5.svg'
import Logos6 from '../assets/images/logos-6.svg'

const Logos = () => {
  return (
    <section className="logos-section section">
        <div className="logos-container container">
            <div className="logos-cards">

                <div className="logos-card">
                    <img src={Logos1} alt="impsum logotype"/>
                </div>

                <div className="logos-card">
                    <img src={Logos2} alt="impsum logotype"/>
                </div>

                <div className="logos-card">
                    <img src={Logos3} alt="impsum logotype"/>
                </div>

                <div className="logos-card">
                    <img src={Logos4} alt="impsum logotype"/>
                </div>

                <div className="logos-card logos-card-4">
                    <img src={Logos5} alt="impsum logotype"/>
                </div>

                <div className="logos-card logos-card-5">
                    <img src={Logos6} alt="impsum logotype"/>
                </div>

            </div>    

        </div>
    </section>
  )
}

export default Logos



