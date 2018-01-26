import React from 'react'
import Post from '../Post/Post'
import './Posts.css'


function Posts({posts}) {
  return (
    <div className='Posts'>
      <h3>Today</h3>
      {
        posts.map((item) => {
          return <Post {...item} key={item.id} />
        })
      }
      </div>
    )
  }
  export default Posts
