// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Hero from './Components/Hero/Hero.js'
import Title from './Components/Title/Title.js'
import About from './Components/About/About.js'
import SkinCare from './Components/SkinCare/SkinCare.js'
import Reviews from './Components/Reviews/Reviews.js'
import Contact from './Components/Contact/Contact.js'
import Footer from './Components/Footer/Footer.js'


const App = () => {

  const [setPlayState] = useState(false);

  return (
    <div className='nav-area'>
     <Navbar/>
     <Hero/>
     <div className="container">
        <About setPlayState={setPlayState}/>
        <Title title='SkinCare Categories.....'/>
        <SkinCare/>
        <Title title='Company Reviews.....'/>
        <Reviews/>
        <Title title='Contact Us'/>
        <Contact/>
        <Footer/>
        <div className="App">
    </div>
     </div>
    </div>
  )
}

export default App