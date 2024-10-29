// eslint-disable-next-line no-unused-vars
import React from 'react'
import './SkinCare.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Campus = () => {
  return (
    <div className='skin'>
      <div className="program">
        <img src={program_1} alt="" /> 
        <img src={program_2} alt="" />
        <img src={program_3} alt="" />
      </div>
      <button className='btn dark-btn'>See more here </button>
      
    </div>
  )
}

export default Campus
