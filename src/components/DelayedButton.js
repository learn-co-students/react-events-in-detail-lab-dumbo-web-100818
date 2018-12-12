// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

  state = {};

  render(){
    return(
      <button onClick={(e) => {setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)}} /> 
    )

  }
}
