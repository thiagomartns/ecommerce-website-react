import React from 'react'
import './features.scss'
import { features } from '../../features'

const Features = () => {
  return (
    <div className='features'>
      {features.map((feature) => (
        <div className='feature' key={feature.id}>
          <img src={feature.img} alt="" class="featureImg" />
          <span className="featureTitle">{feature.title}</span>
          <span className="featureDesc">{feature.desc}</span>
        </div>
      ))}
    </div>
  )
}

export default Features