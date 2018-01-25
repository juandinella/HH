import React, { Component } from 'react'
import Search from '../../../components/general/Search'

class SearchContainer extends Component {
  render () {
    return (
      <Search {...this.props} />
    )
  }
}

export default SearchContainer
