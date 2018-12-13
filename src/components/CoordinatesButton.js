// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (e) => {
   let coordinates = [e.clientX, e.clientY]
   this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Press me for coordinates</button>
      </div>
      )
  }

}
