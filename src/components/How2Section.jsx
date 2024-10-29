import React from 'react'
import checkCircle from '../assets/images/check-circle.svg'
import buttonArrow from '../assets/images/button-arrow.svg'
import transfer from '../assets/images/transfer.svg'
import receive from '../assets/images/receive.svg'
import features1 from '../assets/images/features-1.svg'
import features3 from '../assets/images/features-3.svg'

const How2Section = () => {
  return (
    <section className="how-2-section section">
        <div className="container container-how-2">

            <div className="money-transfer">
                <h3>Make your money transfer simple and clear</h3>
                <ul className="how-2-list">
                    <div>
                        <img src={checkCircle} alt=""/>
                        <li>Banking transactions are free for you</li>
                    </div>
                    <div>
                        <img src={checkCircle} alt=""/>
                        <li>No monthly cash commission</li>
                    </div>
                    <div>
                        <img src={checkCircle} alt=""/>
                        <li>Manage payments and transactions online</li>
                    </div>
                </ul>
                <a href="#" className="btn-primary btn-money-transfer">
                    <span>Learn more</span>
                    <img src={buttonArrow} alt="forward arrow"/>
                </a>
            </div>

            <div className="transfer-img">
                <img src={transfer} alt="transfer money feature in app"/>
            </div>

            <div className="receive-img">
                <img src={receive} alt="receive payment feature in app"/>
            </div>

            <div className="receive-payment">
                <h3>Receive payment from international bank details</h3>
                <div className="receive-payment-cards">
                    
                    <div className="receive-payment-card-1">
                        <div className="grey-box">
                            <img src={features1} alt="credit card"/>
                        </div>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
    
                    <div className="receive-payment-card-2">
                        <div className="grey-box">
                            <img src={features3} alt="wallet"/>
                        </div>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                    
                </div>

                <a href="#" className="btn-primary btn-money-transfer">
                    <span>Learn more</span>
                    <img src={buttonArrow} alt="forward arrow"/>
                </a>
            </div>

        </div>
    </section>


  )
}

export default How2Section