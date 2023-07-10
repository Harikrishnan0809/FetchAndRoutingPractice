// Write your JS code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, BlogLists: []}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const convertedObj = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({BlogLists: convertedObj, isLoading: false})
  }

  render() {
    const {isLoading, BlogLists} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="un-order-list-container-blog-list">
            {BlogLists.map(eachItem => (
              <BlogItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
