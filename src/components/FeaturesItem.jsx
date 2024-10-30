import React from 'react'

const FeaturesItem = ( {item} ) => {
  return (
    <div className="app-features-card">
        <div className="grey-box">
            <img src={item.imageURL} alt={item.imageAlt}/>
        </div>
        <div className="app-features-card-content">
            <h6>{item.title}</h6>
            <p>{item.text}</p>
        </div>
    </div>
  )
}

export default FeaturesItem