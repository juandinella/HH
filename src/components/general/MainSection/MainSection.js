import React from 'react'
import './MainSection.css'
import Topics from '../Topics/Topics'

const MainSection = ({...props}) =>
  <section className="MainSection">
    <Topics />
  </section>

export default MainSection
