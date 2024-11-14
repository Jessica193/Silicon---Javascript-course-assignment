import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import FeedbackCardProvider from './components/contexts/FeedbackCardContext'





function App() {
  


  return (
    <FeedbackCardProvider>
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
    </FeedbackCardProvider>
  )
}

export default App


      