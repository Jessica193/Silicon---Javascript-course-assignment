import React from 'react'
import arrowRight from '../assets/images/arrow-right.svg'

const Contact = () => {



  return (
    <>
    <section className='contact-section'>
        <div className="container">

            <h2>Contact Us</h2>

            <div className="contact-alternatives">

                <div className="contact-card">
                    <div className="contact-card--image">
                        <img src="public\images\contact\envelope.svg" alt="" />
                    </div>
                    <div className="contact-card-content">
                        <h5>Email us</h5>
                        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <a href='#'>
                        <p>Leave a message</p>
                        <img src={arrowRight} alt="arrow icon"/>
                        </a>
                    </div>
                </div>
                
                <div className="contact-card">
                    <div className="contact-card--image">
                        <img src="public\images\contact\add-group.svg" alt="" />
                    </div>
                    <div className="contact-card-content">
                        <h5>Careers</h5>
                        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                        <a href='#'>
                        <p>Send an application</p>
                        <img src={arrowRight} alt="arrow icon" />
                        </a>
                    </div>
                </div>

                <form className='contact-section-form'>
                     <div>
                        <label htmlFor="fullName">Full name</label>
                        <input type="text" name="fullName" id="fullName" />
                     </div>
                     <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" />
                     </div>
                     <div>
                        <label htmlFor="specialist">Specialist</label>
                        <select name="specialist" id="specialist" >
                            <option value="" disabled selected>Pick a specialist...</option>
                            <option value="Physical therapist">Physical therapist</option>
                            <option value="General practitioner">General practitioner</option>
                            <option value="Psychiatrist">Psychiatrist</option>
                        </select>   
                     </div>
                     <button className='btn-primary'>Make an appointment</button>
                </form>

            </div>
        </div>
    </section>



    <section className='address-section'>
        <div className="container">

        </div>
    </section>
    </>
  )
}

export default Contact