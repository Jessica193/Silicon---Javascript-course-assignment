import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Mobile2 from '../assets/images/mobile-image-2.svg'
import FeaturesItem from './FeaturesItem'




const Features = () => {

    const [FeaturesItems, setFeaturesItems] = useState([
        {id: uuidv4(), title: "Easy Payments", imageURL: "./images/features/features-1.svg", imageAlt: "credit card", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."},
        {id: uuidv4(), title: "Data Security", imageURL: "./images/features/features-4.svg", imageAlt: "shield", text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."},
        {id: uuidv4(), title: "Cost Statistics", imageURL: "./images/features/features-2.svg", imageAlt: "grafic bars", text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."},
        {id: uuidv4(), title: "Support 24/7", imageURL: "./images/features/features-5.svg", imageAlt: "communication", text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."},
        {id: uuidv4(), title: "Regular Cashback", imageURL: "./images/features/features-3.svg", imageAlt: "wallet", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."},
        {id: uuidv4(), title: "Top Standards", imageURL: "./images/features/features-6.svg", imageAlt: "smiley", text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."}
    ])


  return (
    <section className="app-features-section section">
        <div className="container container-app-features">

            <div className="mobile-image-2">
                <img src={Mobile2} alt="mobile and credit card"/>
            </div>

            <div className="app-features-content">
                <h2>App Features</h2>
                <p className="h2-paragraph">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin volutpat mollis egestas.
                    Nam luctus facilisis ultrices. Pellentesque
                    volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
                    
                <div className="app-features-cards">

                    {
                        FeaturesItems.length > 0 && FeaturesItems.map( (item) => {

                           return <FeaturesItem item={item} key={uuidv4()} />
                        })
                    }

                </div>
            </div>

        </div>

    </section>
  )
}

export default Features