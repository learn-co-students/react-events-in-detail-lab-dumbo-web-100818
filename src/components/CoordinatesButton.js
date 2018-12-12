// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  state = {};

  render(){
    return(
      <button onClick={(e) => {this.props.onReceiveCoordinates([e.clientX, e.clientY])}}/>
    )
  }
}
