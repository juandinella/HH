import React from 'react'
import './Topics.css'

function Topics (props) {
  return (
    <aside className='Topics'>
      <h3>Topics</h3>
      <nav>
        <div>
          <a href="">
            <span className='thumb development'></span>
            <strong>Development</strong>
          </a>
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
          <a href="">
            <span className='thumb system'></span>
            <strong>System</strong>
          </a>
          <div>
            <div>
              <a href="">
                <span className='thumb security'></span>
                <strong>Security</strong>
              </a>
            </div>
            <div>
              <a href="">
                <span className='thumb cloud'></span>
                <strong>Cloud</strong>
              </a>
            </div>
            <div>
              <a href="">
                <span className='thumb apple'></span>
                <strong>Apple</strong>
              </a>
            </div>
          </div>
        </div>
        <div>
          <a href="">
            <span className='thumb tools'></span>
            <strong>Tools</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb data-science'></span>
            <strong>Data Science</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb blockchain'></span>
            <strong>Blockchain</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb mobile'></span>
            <strong>Mobile</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb list'></span>
            <strong>Awesome lists</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb social'></span>
            <strong>Social</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb visual'></span>
            <strong>Visual</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb open-source'></span>
            <strong>Open source</strong>
          </a>
        </div>
        <div>
          <a href="">
            <span className='thumb all'></span>
            <strong>All topics</strong>
          </a>
        </div>
      </nav>
    </aside>
  )
}

export default Topics
