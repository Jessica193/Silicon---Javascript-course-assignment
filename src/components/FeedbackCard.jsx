import React from 'react'


const FeedbackCard = ({item}) => {

  
  const renderStars = (rating) => {
    return Array.from({ length:rating }, (_, index) => (
        <img key={index} src="public\images\feedback\yellow-star.svg" alt="" className='star-icon'/>
    ))
}
    // renderStars-funktionen kommer från Jeanette i vår klass



  return (
    <div className="feedback-card">
        <img className="quote" src="public\images\feedback\quotes.svg" alt=""/>
        <div className="stars">
          {renderStars(item.starRating)}
        </div>
        <p className="review">{item.comment}</p>
        <div className="sender">
            <img className="avatar" src={item.avatarUrl} alt="picture of an avatar"/>
            <p className="name">{item.author}</p>
            <p className="profession">{item.jobRole}</p>
        </div>
    </div>
  )
}

export default FeedbackCard
