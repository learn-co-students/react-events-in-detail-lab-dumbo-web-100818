// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{



  handleClick = (event) => {
    event.persist()
    // can't use a variable assignment here because it's a pure event
     setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  // setTimeout takes an arcument of a callback and a measurement of time

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
