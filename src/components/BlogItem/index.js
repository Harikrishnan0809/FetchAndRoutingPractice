// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogLists = props => {
  const {details} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = details
  return (
    <li className="blog-list-item-container">
      <Link className="link-container" to={`/blogs/:${id}`}>
        <div className="list-sec-container">
          <img className="list-image" src={imageUrl} alt={`/blogs/:${id}`} />
          <div>
            <p className="react-js-text">{topic}</p>
            <h1 className="title-text">{title}</h1>
            <div className="author-name-and-image-container">
              <img className="avatar-image" alt="avatar" src={avatarUrl} />
              <p className="react-js-text">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogLists
