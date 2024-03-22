import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Home from './home'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Portfolio />

      <Footer />
    </Router>

  )


}


export default App
