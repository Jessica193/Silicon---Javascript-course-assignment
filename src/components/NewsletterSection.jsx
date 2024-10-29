import React from 'react'
import notification from '../assets/images/notification.svg'

function NewsletterSection() {
  return (
    <section className="newsletter-section">
        <div className="container container-newsletter">

            <div className="subscribe">
                <img src={notification} alt="notification icon"/>
                <h5 className="subscribe-h5-desktop">Subscribe to our newsletter to stay informed about latest updates</h5>
                <h5 className="subscribe-h5-mobile">Subscribe to our newsletter</h5>
            </div>

            <form className="newsletter-input">
                <input type="email" name="email" placeholder="Your email"/>
                <button className="btn-primary btn-subscribe">Subscribe</button>
            </form>
            
        </div>

    </section>
  )
}

export default NewsletterSection