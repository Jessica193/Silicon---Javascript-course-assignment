import React from 'react'
import arrowRight from '../assets/images/arrow-right.svg'

const Contact = () => {



  return (
    <>
    <section className='contact-section'>
        <div className="container contact-container">

            <h2 className='contact-us'>Contact Us</h2>

            <div className="contact-alternatives">

                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src="public\images\contact\envelope.svg" alt="" />
                    </div>
                    <div className="contact-card-content">
                        <h5>Email us</h5>
                        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <a href='#' className="contact-link">
                            <p>Leave a message</p>
                            <img src={arrowRight} alt="arrow icon" />
                        </a> 
                    </div>
                </div>
                
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src="public\images\contact\add-group.svg" alt="" />
                    </div>
                    <div className="contact-card-content">
                        <h5>Careers</h5>
                        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                        <a href='#' className="contact-link">
                            <p>Send an application</p>
                            <img src={arrowRight} alt="arrow icon" />
                        </a>
                        
                        
                    </div>
                </div>

            </div>

            <form className='contact-section-form'>
                    <h3>Get Online Consultation</h3>

                    <div>
                        <label htmlFor="fullName">Full name</label>
                        <input className='contact-input' type="text" name="fullName" id="fullName" />
                    </div>

                    <div>
                        <label htmlFor="email">Email address</label>
                        <input className='contact-input' type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="specialist">Specialist</label>
                        <select className='contact-input' name="specialist" id="specialist" >
                            <option value="" defaultChecked></option>
                            <option value="Physical therapist">Physical therapist</option>
                            <option value="General practitioner">General practitioner</option>
                            <option value="Psychiatrist">Psychiatrist</option>
                        </select>   
                    </div>

                    <button className='btn-primary'>Make an appointment</button>
            </form>
        </div>
    </section>



    <section className='address-section'>
        <div className="container address-container">

            <div className='map'>
                <img src="public\images\contact\map.svg" alt="" />
            </div>

            <div className="medical-centers">

                <div className="medical-center">
                    <h5>Medical Center 1</h5>
                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\pin-map.svg" alt="" />
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\phone.svg" alt="" />
                        <p>(406) 555-0120</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\clock.svg" alt="" />
                        <p>Mon – Fri: 9:00 am – 22:00 am <br />
                        Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>
                </div>

                <div className="medical-center">
                    <h5>Medical Center 2</h5>
                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\pin-map.svg" alt="" />
                        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\phone.svg" alt="" />
                        <p>(406) 544-0123</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\clock.svg" alt="" />
                        <p>Mon – Fri: 9:00 am – 22:00 am <br />
                        Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>    
                </div>

                <div className="social-media">

                    <a className="social-media-icon">
                        <img src="public\images\contact\facebook-icon.svg" alt="" />
                    </a>

                    <a className="social-media-icon">
                        <img src="public\images\contact\twitter-icon.svg" alt="" />
                    </a>

                    <a className="social-media-icon">
                        <img src="public\images\contact\instagram-icon.svg" alt="" />
                    </a>

                    <a className="social-media-icon">
                        <img src="public\images\contact\youtube-icon.svg" alt="" />
                    </a>

                </div>
            </div>



        </div>
    </section>
    </>
  )
}

export default Contact