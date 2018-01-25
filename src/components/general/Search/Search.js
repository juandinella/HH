import React from 'react'
import './Search.css'
import searchIcon from './search.svg'

const Search = ({...props}) => (
  <form className='Search'>
    <fieldset>
      <img src={searchIcon} />
      <input type='text' />
    </fieldset>
  </form>
)
export default Search
