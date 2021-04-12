import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    const msg = 'is good'
    return (
      <div>
        <h2>这里可以放置-变量：{ msg }</h2>
        <h2>这里可以放置-表达式：{ 1 + 2 }</h2>
        <h2>这里可以放置-函数：{ (function () { return 'IIFE' } )() }</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)