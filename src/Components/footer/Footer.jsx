import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
        <div className="footerMenu">
          <h1 className="fMenuTitle">About Us</h1>
          <ul className="fMenuList">
            <li className="fListItem">Company</li>
            <li className="fListItem">Contact</li>
            <li className="fListItem">Carrers</li>
            <li className="fListItem">Affiliates</li>
            <li className="fListItem">Stores</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Useful Links</h1>
          <ul className="fMenuList">
            <li className="fListItem">Support</li>
            <li className="fListItem">Refund</li>
            <li className="fListItem">FAQ</li>
            <li className="fListItem">Feedback</li>
            <li className="fListItem">Stories</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Products</h1>
          <ul className="fMenuList">
            <li className="fListItem">Air Max</li>
            <li className="fListItem">Air Jordan</li>
            <li className="fListItem">Blazer</li>
            <li className="fListItem">Crater</li>
            <li className="fListItem">Hippie</li>
          </ul>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
          <div className="fMail">
            <input type="text" placeholder="your@email.com" className="fInput" />
            <button className="fButton">Join!</button>
          </div>
        </div>
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Follow Us</h1>
          <div className="fIcons">
            <img src="./assets/img/facebook.png" alt="" className="fIcon" />
            <img src="./assets/img/twitter.png" alt="" className="fIcon" />
            <img src="./assets/img/instagram.png" alt="" className="fIcon" />
            <img src="./assets/img/whatsapp.png" alt="" className="fIcon" />
          </div>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">@Lama Dev. All rights reserved. 2023.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer