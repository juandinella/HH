import React from 'react'
import './MainSection.css'
import Topics from '../Topics/Topics'
import PostsContainer from '../../../containers/general/Posts'
import Newsletter from '../Newsletter/Newsletter'

const MainSection = ({...props}) =>
  <section className='MainSection'>
    <Topics />
    <PostsContainer/>
    <Newsletter />
  </section>

export default MainSection
