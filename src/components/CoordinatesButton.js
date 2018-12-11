// Code CoordinatesButton Component Here
import React from 'react'
// import onReceiveCoordinates from './index.js'

class CoordinatesButton extends React.Component {

handleClick= (event) => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
}
  render(){
    return (
    <button onClick={this.handleClick}>Coordinated</button>
    )
  }
}

export default CoordinatesButton
