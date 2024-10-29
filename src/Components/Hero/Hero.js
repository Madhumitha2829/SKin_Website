// eslint-disable-next-line no-unused-vars
import React from 'react'
import backgroundHome from './backgroundhome.mp4';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Focus to Best & Quality Medicines</h1>
        <p>In the world of healthcare, individuals with courage, integrity and a deep passion.</p>
        <video autoPlay loop muted className="hero-background-video">
    <source src={backgroundHome} type="video/mp4" />
    Your browser does not support the video tag.
</video>

      </div>
    </div>
  )
}

export default Hero
