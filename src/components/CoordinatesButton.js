// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    // makeArray = () => {
    //   const x = event.clientX
    //   const y = event.clientY
    //   return [x, y]
    // }

    handleClick = (event) => {
      const x = event.clientX
      const y = event.clientY
      this.props.onReceiveCoordinates([x,y])
    }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
