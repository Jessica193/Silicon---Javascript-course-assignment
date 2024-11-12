import React, { useState } from 'react'
import notification from '../assets/images/notification.svg'

function NewsletterSection() {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(email.trim() === '') {
      newErrors.email = 'Email is required'
      } 
      else if (!regexEmail.test(email)) {
        newErrors.email = 'You have to enter a valid email address'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
    }
  

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    })

    console.log(res)


    if (res.ok) {
        setSubmitted(true)
        setEmail('')
    } 
  }

  const handleOK = () => {
    setSubmitted(false)
}

  if (submitted) {
    return (
        <div className='info-box'>
            <h1>Thanks for your request</h1>
            <p>We will contact you soon</p>
            <button className='btn-primary' onClick={handleOK}>OK</button>
        </div>
    )
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
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
              <input required value={email} onChange={handleChange} type="email" name="email" placeholder="Your email"/>
              <button className="btn-primary btn-subscribe">Subscribe</button>
          </form>
          <span>{errors.email && errors.email}</span>
            
        </div>

    </section>
  )
}

export default NewsletterSection