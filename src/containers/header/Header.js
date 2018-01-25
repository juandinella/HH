import React, { Component } from 'react'
import Logo from '../../components/logo/Logo'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <Logo />
      </div>
    )
  }
}

export default Header
