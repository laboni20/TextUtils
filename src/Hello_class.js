import React, { Component } from 'react'

export class Hello_class extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}

export default Hello_class
