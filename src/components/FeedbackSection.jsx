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
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()

    setFeedbackCards(data)
}

useEffect(() => {
 getData()
}, [])


  return (
    <section className="feedback-section section">
        <div className="container container-feedback">
            <div className="feedback-headline">
                <h2>Clients are Loving Our App</h2>
            </div>

                {
                    feedbackCards.map( (item) => {
                        return <FeedbackCard key={item.id} item={item} />
                    })

                }

            {/* <div className="feedback-card">
                <img className="quote" src="public\images\feedback\quotes.svg" alt="quotation marks"/>
                <img className="stars" src={fourStars} alt="four star rating"/>
                <p className="review">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <div className="sender">
                    <img className="avatar" src={avatar1} alt="girl avatar"/>
                    <p className="name">Fannie Summers</p>
                    <p className="profession">Designer</p>
                </div>
            </div>

            <div className="feedback-card">
                <img className="quote" src="public\images\feedback\quotes.svg" alt="quotation marks"/>
                <img className="stars" src={fiveStars} alt="five star rating"/>
                <p className="review">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                <div className="sender">
                    <img className="avatar" src={avatar2} alt="boy avatar"/>
                    <p className="name">Albert Flores</p>
                    <p className="profession">Developer</p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default FeedbackSection