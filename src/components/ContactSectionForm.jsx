import React, { useState } from 'react'

const ContactSectionForm = () => {

    const [formData, setformData] = useState({name:'', email:'', specialist: ''})
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setformData({...formData, [name]: value})
    

        // const newErrors = { ...errors };

        // if (name === "name") {
        //     if (value.trim().length < 2) {
        //         newErrors.name = "Full name is required";
        //     } else {
        //         newErrors.name = ""; 
        //     }
        // }

        // if (name === "email") {
        //     const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        //     if (value.trim() === "") {
        //         newErrors.email = "Email is required";
        //     } else if (!regexEmail.test(value)) {
        //         newErrors.email = "You have to enter a valid email address";
        //     } else {
        //         newErrors.email = ""; 
        //     }
        // }

        // if (name === "specialist") {
        //     if (value.trim() === "") {
        //         newErrors.specialist = "Specialist is required";
        //     } else {
        //         newErrors.specialist = ""; 
        //     }
        // }

        // setErrors(newErrors);
    




        // if (value.trim() === '') {
        //     setErrors(prevErrors => ({...prevErrors, [name] : 
        //          `The ${name} field is reqired`}))
        // } else {
        //     setErrors(prevErrors => ({...prevErrors, [name] : 
        //         ''}))
        // }
    }

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (formData.name.trim().length < 2) {
            newErrors.name = 'Full name is required'
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required'
        } else if (!regexEmail.test(formData.email)) {
            newErrors.email = 'You have to enter a valid email address'
        }
        if (formData.specialist === '') newErrors.specialist = 'Specialist is required'

        setErrors(newErrors)

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