import React from 'react'
import './slider.scss'
import { products } from '../../products'

const Slider = ({ style }) => {
  return (
    <div className='slider'>
      <div className="sliderWrapper" style={style}>
        {products.map((product) => (
          <div className="sliderItem" key={product.id}>
            <img className='sliderImg' src={product.colors[0].img} />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              {`${product.title.toUpperCase()} NEW SEASON`}
            </h1>
            <h2 className="sliderPrice">{`$${product.price}`}</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider