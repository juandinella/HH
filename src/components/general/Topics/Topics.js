import React from 'react'
import './Topics.css'
import { Link } from 'react-router-dom'
import data from '../../../containers/general/Posts/posts.json'

const Topics = ({posts}) =>
  <aside className='Topics'>
    <h3>Topics</h3>
    <nav>
      <div>
        <Link to='/development'>
          <span className='thumb development'></span>
          <strong>Development</strong>
          <em>
            {console.log(data.posts[0].time)}
          </em>
        </Link>
        <div>
          <div>
            <a href="">
              <span className='thumb devops'></span>
              <strong>Devops</strong>
            </a>
          </div>
          <div>
            <a href="">
              <span className='thumb database'></span>
              <strong>Database</strong>
            </a>
          </div>
          <div>
            <a href="">
              <span className='thumb api'></span>
              <strong>Apis</strong>
            </a>
          </div>
          <div>
            <a href="">
              <span className='thumb library'></span>
              <strong>Libraries</strong>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Link to='/system'>
          <span className='thumb system'></span>
          <strong>System</strong>
        </Link>
        <div>
          <div>
            <Link to='/security'>
              <span className='thumb security'></span>
              <strong>Security</strong>
            </Link>
          </div>
          <div>
            <Link to='/cloud'>
              <span className='thumb cloud'></span>
              <strong>Cloud</strong>
            </Link>
          </div>
          <div>
            <Link to='/apple'>
              <span className='thumb apple'></span>
              <strong>Apple</strong>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link to='/tools'>
          <span className='thumb tools'></span>
          <strong>Tools</strong>
        </Link>
      </div>
      <div>
        <Link to='/data-science'>
          <span className='thumb data-science'></span>
          <strong>Data Science</strong>
        </Link>
      </div>
      <div>
        <Link to='/data-blockchain'>
          <span className='thumb blockchain'></span>
          <strong>Blockchain</strong>
        </Link>
      </div>
      <div>
        <Link to='/mobile'>
          <span className='thumb mobile'></span>
          <strong>Mobile</strong>
        </Link>
      </div>
      <div>
        <Link to='/list'>
          <span className='thumb list'></span>
          <strong>Awesome lists</strong>
        </Link>
      </div>
      <div>
        <Link to='/social'>
          <span className='thumb social'></span>
          <strong>Social</strong>
        </Link>
      </div>
      <div>
        <Link to='/visual'>
          <span className='thumb visual'></span>
          <strong>Visual</strong>
        </Link>
      </div>
      <div>
        <Link to='/open-source'>
          <span className='thumb open-source'></span>
          <strong>Open source</strong>
        </Link>
      </div>
      <div>
        <Link to='/all'>
          <span className='thumb all'></span>
          <strong>All topics</strong>
        </Link>
      </div>
    </nav>
  </aside>


export default Topics
