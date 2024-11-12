import React, { useState } from 'react'
import notification from '../assets/images/notification.svg'

function NewsletterSection() {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(email.trim() === '') {
      alert('You can not leave this field empty') /*Ändra senare*/
        return
      } 
      else if (!regexEmail.test(email)) {
        alert('You have to enter a valid email-address') /*Ändra senare*/
      }

    

      setEmail('')

    }





  return (
    <section className="newsletter-section">
        <div className="container container-newsletter">

            <div className="subscribe">
                <img src={notification} alt="notification icon"/>
                <h5 className="subscribe-h5-desktop">Subscribe to our newsletter to stay informed about latest updates</h5>
                <h5 className="subscribe-h5-mobile">Subscribe to our newsletter</h5>
            </div>

            <form onSubmit={handleSubmit} noValidate className="newsletter-input">
                <input required value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Your email"/>
                <button className="btn-primary btn-subscribe">Subscribe</button>
            </form>
            
        </div>

    </section>
  )
}

export default NewsletterSection