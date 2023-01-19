import React, { useEffect, useState } from 'react'
import './product.scss'

const Product = ({ chosenProduct }) => {

  const [imgSrc, setImgSrc] = useState(null)

  const handleColorClick = (newSrc) => {
    setImgSrc(newSrc)
  }

  useEffect(() => {
    setImgSrc(chosenProduct.colors[0].img);
  }, [chosenProduct])

  return (
    <div className="product" id="product">
      <img src={imgSrc} className='productImg' />
      <div className="productDetails">
        <h1 className="productTitle">{chosenProduct.title}</h1>
        <h2 className="productPrice">{`$${chosenProduct.price}`}</h2>
        <p className="productDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti qui culpa blanditiis dolorum laboriosam nihil nemo fugiat excepturi sint rerum! Soluta?</p>
        <div className="colors">
          {chosenProduct.colors.map((color, index) => (
            <div 
              key={index}
              className="color" 
              style={{ backgroundColor: color.code }}
              onClick={() => handleColorClick(color.img)}
            ></div>
          ))}
        </div>
        <div className="sizes">
          <div className="size">42</div>
          <div className="size">43</div>
          <div className="size">44</div>
        </div>
        <button className="productButton">BUY NOW!</button>
      </div>
    </div>
  )
}

export default Product