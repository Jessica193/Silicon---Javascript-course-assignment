import React from 'react'
import Mobile2 from '../assets/images/mobile-image-2.svg'
import Features1 from '../assets/images/features-1.svg'
import Features4 from '../assets/images/features-4.svg'
import Features2 from '../assets/images/features-2.svg'
import Features5 from '../assets/images/features-5.svg'
import Features3 from '../assets/images/features-3.svg'
import Features6 from '../assets/images/features-6.svg'

const Features = () => {
  return (
    <section className="app-features-section section">
        <div className="container container-app-features">

            <div className="mobile-image-2">
                <img src={Mobile2} alt="mobile and credit card"/>
            </div>

            <div className="app-features-content">
                <h2>App Features</h2>
                <p className="h2-paragraph">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin volutpat mollis egestas.
                    Nam luctus facilisis ultrices. Pellentesque
                    volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
                    
                <div className="app-features-cards">

                    <div className="app-features-card">
                        <div className="grey-box grey-box-1">
                            <img src={Features1} alt="credit card"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Easy Payments</h6>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    
                    <div className="app-features-card">
                        <div className="grey-box">
                            <img src={Features4} alt="shield"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Data Security</h6>
                            <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                        </div>
                    </div>
                    
                    <div className="app-features-card">
                        <div className="grey-box">
                            <img src={Features2} alt="grafic bars"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Cost Statistics</h6>
                            <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                        </div>
                    </div>

                    <div className="app-features-card">
                        <div className="grey-box">
                            <img src={Features5} alt="communication"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Support 24/7</h6>
                            <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                        </div>
                    </div>

                    <div className="app-features-card">
                        <div className="grey-box">
                            <img src={Features3} alt="wallet"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Regular Cashback</h6>
                            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                        </div>
                    </div>

                    <div className="app-features-card">
                        <div className="grey-box">
                            <img src={Features6} alt="smiley"/>
                        </div>
                        <div className="app-features-card-content">
                            <h6>Top Standards</h6>
                            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
  )
}

export default Features