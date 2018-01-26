import React, { Component } from 'react'
import Search from '../../../components/general/Search'

class SearchContainer extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }
  setInputRef = element => {
    this.input = element;
  }
  render () {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchContainer
