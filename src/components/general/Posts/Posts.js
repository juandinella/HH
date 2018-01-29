import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import Sort from '../Sort/Sort'


function Posts({posts}) {
  return (
    <div className='Posts'>
      <header>
        <h3>Today</h3>
        <Sort
          options={[
            'Newest',
            'Comments'
          ]}
        />
      </header>
      <section>
        {
          posts.map((item) => {
            return <Post {...item} key={item.id} />
          })
        }
      </section>
      </div>
    )
  }
  export default Posts
