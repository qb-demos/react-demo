import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeBtn extends Component {
  static defaultProps = {
    likedText: '取消',
    unLikedText: '点赞'
  }

  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClick (e) {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unLikedText}
      </button>
    )
  }
}

ReactDOM.render(
  <LikeBtn />,
  document.getElementById('root')
)