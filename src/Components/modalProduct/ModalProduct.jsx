import React from 'react'
import './modalProduct.scss'

const ModalProduct = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null
  }

  return (
    <div className='payment'>
      <h1 className="payTitle">Personal Information</h1>
      <label for="">Name and Surname</label>
      <input type="text" placeholder="John Doe" className="payInput" />
      <label for="">Phone Number</label>
      <input type="text" placeholder="+1 234 5678" className="payInput" />
      <label for="">Addres</label>
      <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
      <h1 class="payTitle">Card Information</h1>
      <div className="cardIcons">
        <img src="./assets/img/visa.png" width="40" className="cardIcon" alt="" />
        <img src="./assets/img/master.png" width="40" className="cardIcon" alt="" />
      </div>
      <input type="password" placeholder="Card Number" className="payInput" />
      <div class="cardInfo">
        <input type="text" placeholder="mm" className="payInput sm" />
        <input type="text" placeholder="yyyy" className="payInput sm" />
        <input type="text" placeholder="cvv" className="payInput sm" />
      </div>
      <button className="payButton">Checkout</button>
      <span className="close" onClick={onClose}>X</span>
    </div>
  )
}

export default ModalProduct