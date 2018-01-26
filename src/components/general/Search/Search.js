import React from 'react'
import './Search.css'
import searchIcon from './search.svg'

const Search = ({...props}) => (
  <form
    className='Search'
    onSubmit={props.handleSubmit}
    >
    <fieldset>
      <img src={searchIcon} alt='search icon'/>
      <input
        ref={props.setRef}
        type='text'
        name='search'
      />
    </fieldset>
  </form>
)
export default Search
