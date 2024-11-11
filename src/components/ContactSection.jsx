import React from 'react'
import Breadcrumb from './Breadcrumb'
import ContactSectionForm from './ContactSectionForm'
import arrowRight from '../assets/images/arrow-right.svg'


const ContactSection = () => {
  return (
    <section className='contact-section'>
        <Breadcrumb />
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

            <ContactSectionForm />

        </div>
    </section>
  )
}

export default ContactSection