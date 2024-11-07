import React from 'react'
import HeroSection from '../components/HeroSection'
import Logos from '../components/Logos'
import Features from '../components/Features'
import HowSection from '../components/HowSection'
import How2Section from '../components/How2Section'
import FeedbackSection from '../components/FeedbackSection'
import FAQSection from '../components/FAQSection'
import NewsletterSection from '../components/NewsletterSection'

const Home = () => {
  return (
    <>
        <HeroSection />
        <Logos />
        <Features />
        <HowSection/>
        <How2Section/>
        <FeedbackSection/>
        <FAQSection/>
        <NewsletterSection/>
    </>
  )
}

export default Home