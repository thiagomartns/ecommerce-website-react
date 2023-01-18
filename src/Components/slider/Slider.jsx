import React from 'react'
import './slider.scss'
import { products } from '../../products'

const Slider = () => {
  return (
    <div className='slider'>
      <div className="sliderWrapper">
        {products.map((product) => (
          <div className="sliderItem">
            <img className='sliderImg' src={product.colors[0].img} />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              {`${product.title.toUpperCase()} NEW SEASON`}
            </h1>
            <h2 class="sliderPrice">{`$${product.price}`}</h2>
            <a href="#product">
              <button class="buyButton">BUY NOW!</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider