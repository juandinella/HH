import React from 'react'
import './Header.css'
import Logo from './logo.svg'
import SearchContainer from '../../../containers/general/Search/SearchContainer'

const Header = ({...props}) =>
  <header className='Header'>
    <div className="logo">
      <img src={Logo} alt='logo' width='32'/>
    </div>
    <SearchContainer />
  </header>

export default Header
