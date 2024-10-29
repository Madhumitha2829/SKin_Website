/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'

// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {
  return ( 
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>OUR COMPANY</h2>
        <p>Live Well Pharmacy is a trusted healthcare provider committed to enhancing community health and wellness. At Live Well Pharmacy, we believe in the power of preventive care and education, empowering our customers to live healthier lives every day.</p>
        <p>With a focus on delivering personalized care and expert guidance, we offer a broad range of pharmaceutical services, including prescription dispensing, over-the-counter medications, health consultations, and wellness products.</p>
        <p>Our team of experienced pharmacists and healthcare professionals prioritizes customer well-being, ensuring that each individual receives accurate information and support to make informed health decisions. At Live Well Pharmacy, we believe in building long-term relationships with our customers, fostering a supportive environment for all their healthcare needs.</p>
        <p>Live Well Pharmacy is a trusted healthcare provider committed to enhancing the well-being of our community through accessible, quality pharmaceutical services. Our team of experienced pharmacists and staff strive to offer personalized care, ensuring each customer receives the support they need for their health journey. </p>
      </div>
    </div>
  )
}

export default About
