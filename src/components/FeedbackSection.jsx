import React, { useEffect, useState } from 'react'
import avatar1 from '../assets/images/avatar-1.svg'
import quotes from '../assets/images/quotes.svg'
import fiveStars from '../assets/images/five-stars.svg'
import fourStars from '../assets/images/four-stars.svg'
import avatar2 from '../assets/images/avatar-2.svg'
import FeedbackCard from './FeedbackCard'


const FeedbackSection = () => {

const [feedbackCards, setFeedbackCards] = useState([])

const getData = async () => {

    try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        if(!res.ok) {
            console.error('data could not be fetched')
        }
        const data = await res.json()

        setFeedbackCards(data)
    } catch (error) {
        console.error(error.message)
    }

}

useEffect(() => {

 getData()

}, [])

// const renderStars = (rating) => {
//     return Array.from({ length:rating }, (_, index) => (
//         <img key={index} src="public\images\feedback\yellow-star.svg" alt="" className='star-icon'/>
//     ))
// }
//     // renderStars-funktionen kommer från Jeanette i vår klass


  return (
    <section className="feedback-section section">
        <div className="container container-feedback">
            <div className="feedback-headline">
                <h2>Clients are Loving Our App</h2>
            </div>

                {
                    feedbackCards.map( (item) => {
                        return <FeedbackCard key={item.id} item={item}  />
                    })

                }
        </div>
    </section>
  )
}

export default FeedbackSection