import React, { Component } from 'react'

import Header from './components/general/Header/Header'
import MainSection from './components/general/MainSection/MainSection'

class App extends Component {
  render () {
    return (
      <main>
        <Header />
        <MainSection/>
      </main>
    )
  }
}

export default App
