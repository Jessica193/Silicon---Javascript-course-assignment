import React from 'react'
import blueArrow from '../assets/images/blue-arrow-up.svg'
import greyArrow from '../assets/images/grey-arrow-down.svg'
import phone from '../assets/images/phone.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import messageBubble from '../assets/images/message-bubble.svg'
import greenArrow from '../assets/images/green-arrow.svg'

const FAQSection = () => {
  return (
    <section className="FAQ-section">
        <div className="container container-FAQ">

            <div className="FAQ-info">
                <h3 className="FAQ-info-h3">Any questions? Check out the FAQs</h3>
                <p className="FAQ-info-p">Still have unanswered questions and need
                to get in touch?</p>
            </div>

            <div className="accordion">

                <div className='accordion-item'>
                    <div className="question">
                        <p>Is any of my personal information
                            stored in the App?
                        </p>
                        <button >
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className="question">
                        <p>What formats can I download my
                        transaction history in?
                        </p>
                        <button>
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className="question">
                        <p>Can I schedule future transfers?
                        </p>
                        <button>
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className="question">
                        <p>When can I use Banking App
                        services?
                        </p>
                        <button>
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className="question">
                        <p>Can I create my own password that is
                        easy for me to remember?
                        </p>
                        <button>
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

                <div className='accordion-item'>
                    <div className="question">
                        <p>What happens if I forget or lose my
                        password?
                        </p>
                        <button>
                            <img src={greyArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className="expandable">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, aut asperiores voluptate id obcaecati et ipsa delectus temporibus ad!
                        </div>
                    </div>
                </div>

            </div>

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
