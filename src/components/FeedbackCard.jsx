import React from 'react'


const FeedbackCard = ({item}) => {
  return (
    <div className="feedback-card">
        <img className="quote" src="public\images\feedback\quotes.svg" alt="quotation marks"/>
        <img className="stars" src={item.starRating} alt="star rating"/>
        <p className="review">{item.comment}</p>
        <div className="sender">
            <img className="avatar" src={item.avatarURL} alt="picture of an avatar"/>
            <p className="name">{item.author}</p>
            <p className="profession">{item.jobbRole}</p>
        </div>
    </div>
  )
}

export default FeedbackCard