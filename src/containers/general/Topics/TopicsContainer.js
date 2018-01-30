import React, { Component } from 'react'
import Topics from '../../../components/general/Topics'
import data from '../Posts/posts.json'

class TopicsContainer extends Component {
  render () {
    return (
      <Topics {...this.props } topics={data.posts} />
    )
  }
}

export default TopicsContainer
