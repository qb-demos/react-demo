import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeBtn extends Component {
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
      <button onClick={this.handleClick.bind(this)}>{this.state.isLiked ? '取消' : '点赞'}</button>
    )
  }
}

ReactDOM.render(
  <LikeBtn />,
  document.getElementById('root')
)