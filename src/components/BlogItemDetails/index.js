// Write your JS code here
import './index.css'

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {isShow: true, list: {}}

  componentDidMount = () => {
    this.getApiResponse()
  }

  getApiResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const number = id.split(':')
    const response = await fetch(`https://apis.ccbp.in/blogs/${number[1]}`)
    const data = await response.json()

    const convertToCase = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }

    this.setState({list: convertToCase})
  }

  render() {
    const {list} = this.state
    const {title, imageUrl, avatarUrl, author, content} = list

    return (
      <div className="detail-container">
        <h1 className="detail-title">{title}</h1>
        <div className="detail-profile-container">
          <img className="detail-avatar-image" alt={author} src={avatarUrl} />
          <p className="author-name">{author}</p>
        </div>
        <img className="detail-image" alt={title} src={imageUrl} />
        <p className="detail-para">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
