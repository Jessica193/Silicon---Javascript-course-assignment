import React from 'react'
import phone from '../assets/images/phone.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import messageBubble from '../assets/images/message-bubble.svg'
import greenArrow from '../assets/images/green-arrow.svg'
import FAQAccordion from './FAQAccordion'

const FAQSection = () => {
  return (
    <section className="FAQ-section">
        <div className="container container-FAQ">

            <div className="FAQ-info">
                <h3 className="FAQ-info-h3">Any questions? Check out the FAQs</h3>
                <p className="FAQ-info-p">Still have unanswered questions and need
                to get in touch?</p>
            </div>

            <FAQAccordion />


            <a className="btn-primary FAQ-btn" href="#">Contact us now</a>

            <div className="FAQ-cards">

                <div className="FAQ-card FAQ-card-1">
                    <img src={phone} alt="telephone"/>
                    <p>Still have  questions?</p>
                    <a href="#">
                        <p>Contact us</p>
                        <img src={arrowRight} alt="arrow icon"/>
                    </a>
                </div>

                <div className="FAQ-card FAQ-card-2">
                    <img src={messageBubble} alt="text-message icon"/>
                    <p>Don't like phone calls?</p>
                    <a href="#">
                        <p>Contact us</p>
                        <img src={greenArrow} alt="arrow icon"/>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default FAQSection
