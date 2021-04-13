import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class UserCom extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </div>
    )
  }
}

class Wrap extends Component {
  render () {
    return (
      <div>{users.map((user, i) => <UserCom user={user} key={i}></UserCom>)}</div>
    )
  }
}

ReactDOM.render(
  <Wrap />,
  document.getElementById('root')
)