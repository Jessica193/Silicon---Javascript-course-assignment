import React, { useContext, useEffect, useState } from 'react'
import FeedbackCard from './FeedbackCard'
import { FeedbackCardContext } from './contexts/FeedbackCardContext'


const FeedbackSection = () => {

    const {feedbackCards} = useContext(FeedbackCardContext)


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