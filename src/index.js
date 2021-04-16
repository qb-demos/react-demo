import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './comment'
import './index.css'

class Wrap extends Component {
  render () {
    return (
      <CommentApp></CommentApp>
    )
  }
}

ReactDOM.render(
  <Wrap />,
  document.getElementById('root')
)