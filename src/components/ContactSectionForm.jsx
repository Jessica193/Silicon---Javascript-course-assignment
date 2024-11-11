import React, { useState } from 'react'

const ContactSectionForm = () => {

    const [formData, setformData] = useState({name:'', email:'', specialist: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setformData({...formData, [name]: value})
    }


  return (
    <form noValidate onSubmit={handleSubmit} className='contact-section-form'>
        <h3>Get Online Consultation</h3>

        <div>
            <label htmlFor="fullName">Full name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className='contact-input' id="fullName" required/>
        </div>

        <div>
            <label htmlFor="email">Email address</label>
            <input value={formData.email} onChange={handleChange} className='contact-input' type="email" name="email" id="email" required />
        </div>

        <div>
            <label htmlFor="specialist">Specialist</label>
            <select value={formData.specialist} onChange={handleChange} className='contact-input' name="specialist" id="specialist" required >
                <option value=""></option>
                <option value="Physical therapist">Physical therapist</option>
                <option value="General practitioner">General practitioner</option>
                <option value="Psychiatrist">Psychiatrist</option>
            </select>   
        </div>

        <button className='btn-primary'>Make an appointment</button>
    </form>
  )
}

export default ContactSectionForm