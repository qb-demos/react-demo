import React, { Component } from 'react'

class CommentInput extends Component {

  // static defaultProps = {}
  // static propTypes = {}

  constructor() {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  UNSAFE_componentWillMount () {
    const userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({ userName })
    }
  }
  componentDidMount () {
    this.textarea.focus()
  }

  handleUserNameChanged (e) {
    this.setState({
      userName: e.target.value
    })
  }
  handleUsernameBlur (e) {
    localStorage.setItem('userName', e.target.value)
  }
  handleContentChanged (e) {
    this.setState({
      content: e.target.value
    })
  }
  handleClick (e) {
    // 使用 props 中的回调函数传值给父组件
    if (this.props.onSubmit) {
      const { userName, content } = this.state
      this.props.onSubmit({ userName, content })
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-filed-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.userName}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUserNameChanged.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-filed-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChanged.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleClick.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
