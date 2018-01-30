import React from 'react'
import './Post.css'

const Post = ({votes, title, description,time, author, comments, tags, fp, link}) =>
  <article className='Post'>
    <a href={link} target="_blank">
      <span><em>▲</em>{votes}</span>
      <span>
        <svg width="12" height="12"><g><path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" data-reactid="89" fill='#797982'></path></g></svg>
        {comments}
      </span>
    </a>
    <div>
      <h2>
        <a href={link} target="_blank">{title}</a>
        { 
          (fp) ? <sup><span>This submission has been on Hacker News front page</span><svg width="12" height="11" viewBox="0 0 12 11"><path fill="#ff6600" d="M6 9l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573 1.763-3.573 1.763 3.573 3.943.573-2.853 2.781.674 3.927z"></path></svg></sup> : ' '
        }
      </h2>
      <p>{description}</p>
      <summary>
        <time>{time} hours ago</time>
        by 
        <a href="">{author}</a>
        <ul>
          {
            tags.map(({id, link, name}) => 
              <li key={id}><a className='tag' href="{link}">{name}</a></li>
            )
          }
        </ul>
      </summary>
    </div>
  </article>

export default Post
