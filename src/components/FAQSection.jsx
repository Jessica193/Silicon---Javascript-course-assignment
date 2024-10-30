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

            <div className="questions-mobile">

                <div className="q q-top">
                    <button>Is any of my personal information
                        stored in the App?</button>
                    <button>
                        <img src={blueArrow} alt="arrow icon"/>
                    </button>
                </div>
                
                <div className="q q-text">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida
                        et consequat lobortis arcu velit. Nibh pharetra
                        fermentum duis accumsan lectus non. Massa
                        cursus molestie lorem scelerisque pellentesque.
                        Nisi, enim, arcu purus gravida adipiscing euismod
                        montes, duis egestas. Vehicula eu etiam quam
                        tristique tincidunt suspendisse ut consequat.</p>
                    <p>Ornare senectus fusce dignissim ut. Integer
                        consequat in eu tortor, faucibus et lacinia
                        posuere. Turpis sit viverra lorem suspendisse
                        lacus aliquam auctor vulputate. Quis egestas
                        aliquam nunc purus lacus, elit leo elit facilisi.
                        Dignissim amet adipiscing massa integer.</p>
                </div>

                <div className="q">
                    <button>What formats can I download my
                        transaction history in?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q">
                    <button>Can I schedule future transfers?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q">
                    <button>When can I use Banking App
                        services?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q">
                    <button>Can I create my own password that is
                        easy for me to remember?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q q-bottom">
                    <button>What happens if I forget or lose my
                        password?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>
                
            </div>

            <a className="btn-primary FAQ-btn" href="#">Contact us now</a>

            <div className="questions-tablet">

                <div className="q-t">
                    <button>Is any of my personal information
                        stored in the App?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q-t">
                    <button>What formats can I download my
                        transaction history in?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q-t q-t-text" >
                    <div className="flex">
                        <button>Can I schedule future transfers?</button>
                        <button>
                            <img src={blueArrow} alt="arrow icon"/>
                        </button>
                    </div>
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                </div>

                <div className="q-t">
                    <button>When can I use Banking App
                        services?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q-t">
                    <button>Can I create my own password that is
                        easy for me to remember?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

                <div className="q-t">
                    <button>What happens if I forget or lose my
                        password?</button>
                    <button>
                        <img src={greyArrow} alt="arrow icon"/>
                    </button>
                </div>

            </div>

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