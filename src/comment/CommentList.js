import React, { Component } from 'react'
import CommentItem from './CommentItem'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render () {
    // const comments = [
    //   { username: 'Jerry', content: 'Hello' },
    //   { username: 'Tomy', content: 'World' },
    //   { username: 'Lucy', content: 'Good' }
    // ]

    return (
      <div>{this.props.comments.map((v, i) => {
        return (
          <CommentItem comment={v} key={i}></CommentItem>
        )
      })}</div>
    )
  }
}

export default CommentList
