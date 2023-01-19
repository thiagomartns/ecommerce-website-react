import React from 'react'
import './newSeason.scss'

const NewSeason = () => {
  return (
    <div className='newSeason'>
      <div class="nsItem">
        <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="nsImg" alt="" />
      </div>
      <div class="nsItem">
        <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
        <h1 class="nsTitle">New Season</h1>
        <h1 class="nsTitle">New Collection</h1>
        <a href="#nav">
          <button class="nsButton">CHOOSE YOUR STYLE</button>
        </a>
      </div>
      <div class="nsItem">
        <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="nsImg" />
      </div>
    </div>
  )
}

export default NewSeason