import React from 'react'
import './Header.css'
import Logo from './logo.svg'
import SearchContainer from '../../../containers/general/Search/SearchContainer'

const Header = ({...props}) =>
  <header className='Header'>
    <img src={Logo} />
    <SearchContainer />
  </header>

export default Header
