import React from 'react'
import './Newsletter.css'

function Newsletter (props) {
  return (
    <div className='Newsletter'>
      <h1>Get high on categorized <br /> Show HN submissions</h1>
      <p>We know the struggle. A lot of great stuff on Hacker News gets lost in the  /shownew limbo.</p>
      <form action="">
        <fieldset>
          <p>Get the weekly top Show HN picks in your inbox!</p>
          <input
            type='email'
            name='newsletter'
            placeholder='Your e-mail'
          />
          <input
            type='submit'
            name='submit'
            value='Subscribe'
          />
        </fieldset>
      </form>
      <p>Proudly brought to you by <a href="">Finch.io</a></p>
    </div>
  )
}

export default Newsletter
