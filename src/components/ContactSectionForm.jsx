import React, { useState } from 'react'

const ContactSectionForm = () => {

    const [formData, setformData] = useState({name:'', email:'', specialist: ''})
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setformData({...formData, [name]: value})


        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name] : 
                 `The ${name} field is reqired`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name] : 
                ''}))
        }
    }

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is reqired`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }



        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: formData.name,
                email: formData.email,
                specialist: formData.specialist
            })
        })


        if (res.ok) {
            setSubmitted(true)
            setformData({name:'', email:'', specialist: ''})
        } 
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




   



  return (
    <form noValidate onSubmit={handleSubmit} className='contact-section-form'>
        <h3>Get Online Consultation</h3>

        <div>
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className='contact-input' id="name" required/>
            <span>{errors.name && errors.name}</span>
        </div>

        <div>
            <label htmlFor="email">Email address</label>
            <input value={formData.email} onChange={handleChange} className='contact-input' type="email" name="email" id="email" required />
            <span>{errors.email && errors.email}</span>
        </div>

        <div>
            <label htmlFor="specialist">Specialist</label>
            <select value={formData.specialist} onChange={handleChange} className='contact-input' name="specialist" id="specialist" required >
                <option value=""></option>
                <option value="Physical therapist">Physical therapist</option>
                <option value="General practitioner">General practitioner</option>
                <option value="Psychiatrist">Psychiatrist</option>
            </select>   
            <span>{errors.specialist && errors.specialist}</span>
        </div>

        <button className='btn-primary'>Make an appointment</button>
    </form>
  )
}

export default ContactSectionForm