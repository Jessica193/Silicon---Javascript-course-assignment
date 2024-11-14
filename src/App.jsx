import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import FeedbackCardProvider from './components/contexts/FeedbackCardContext'
import AccordionItemProvider from './components/contexts/AccordionItemContext'






function App() {
  


  return (
    <FeedbackCardProvider>
      <AccordionItemProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AccordionItemProvider>
    </FeedbackCardProvider>
  )
}

export default App


      