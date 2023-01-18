import React, { useState } from 'react'
import './menuNav.scss'
import { products } from '../../products'

const MenuNav = ({ handleClick }) => {

  return (
    <div>
      <nav id="nav">
        <div className="navTop">
          <div className="navItem">
            <img src="./assets/img/sneakers.png" alt="" />
          </div>
          <div className="navItem">
            <div className="search">
              <input type="text" placeholder="Search..." className="searchInput" />
              <img
                src="./assets/img/search.png"
                width="20"
                height="20"
                alt=""
                className="searchIcon"
              />
            </div>
          </div>
          <div className="navItem">
            <span className="limitedOffer">Limited Offer!</span>
          </div>
        </div>
        <div className="navBottom">
          {products.map((product, index) => (
            <h3 
              className="menuItem" 
              key={product.id}
              onClick={() => handleClick(index)}
            >
              {product.title.toUpperCase()}
            </h3>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default MenuNav