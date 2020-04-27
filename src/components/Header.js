import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Soumya Aggarwal</strong>
      </h1>
      <h2> Art Portfolio </h2>
    </div>
    <Footer />
  </header>
)

export default Header
