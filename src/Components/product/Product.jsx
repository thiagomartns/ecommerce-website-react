import React, { useEffect, useState } from 'react'
import ModalProduct from '../modalProduct/ModalProduct';
import './product.scss'

const Product = ({ chosenProduct }) => {

  const sizes = [42, 43, 44];
  
  const [imgSrc, setImgSrc] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {sizes.map((size, index) => (
            <div 
              key={index} 
              className={`size ${size === selectedSize ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <button 
          className="productButton"
          onClick={() => setIsModalOpen(true)}
        >
          BUY NOW!
        </button>
      </div>
      <ModalProduct 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default Product