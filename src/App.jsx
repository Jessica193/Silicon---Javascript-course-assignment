import './App.css'
import './assets/css/main.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Logos from './components/Logos'
import Features from './components/Features'
import HowSection from './components/HowSection'
import How2Section from './components/How2Section'
import FeedbackSection from './components/FeedbackSection'
import FAQSection from './components/FAQSection'
import NewsletterSection from './components/NewsletterSection'



function App() {
  

  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <Logos/>
        <Features/>
        <HowSection/>
        <How2Section/>
        <FeedbackSection/>
        <FAQSection/>
        <NewsletterSection/>
      </main>
      <Footer />
    </>
  )
}

export default App
