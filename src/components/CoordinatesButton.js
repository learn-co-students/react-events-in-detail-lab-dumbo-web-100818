// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  handleOnClick = (e) => {
    const xCoo = e.clientX
    const yCoo = e.clientY
    const arr = [xCoo, yCoo]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>
      </button>
    )
  }
}
