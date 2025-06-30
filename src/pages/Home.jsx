import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <About/>
    <Services/>
    <Solutions/>
    <Testimonials/>
    {/* <Footer/> */}
    </>
    

  )
}

export default Home