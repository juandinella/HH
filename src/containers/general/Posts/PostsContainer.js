import React, { Component } from 'react'
import Posts from '../../../components/general/Posts'
import data from './posts.json'

class PostsContainer extends Component {
  render () {
    return (
      <Posts {...this.props} posts={data.posts} />
    )
  }
}

export default PostsContainer
