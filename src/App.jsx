import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/services'
import Profile from './components/profile/profile'
import Test from './components/test/test'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Time from './components/Time/time'

const App = () => {
  return (
    <>
      <Time/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Profile/>
      <Test/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
