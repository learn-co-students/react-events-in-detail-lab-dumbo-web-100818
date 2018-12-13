// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleClick = event => {
    //event persist holds the event so you can use it again later at the bottom
    event.persist()
    //set time out holds 2 parameters a call back function and the amout of time b4 its fired
    setTimeout(() =>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}>
        Delay
      </button>
    );
  }

}

export default DelayedButton;
