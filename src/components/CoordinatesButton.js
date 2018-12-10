// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

  constructor(props){
    super(props)

  }

  handleClickEvent=(event)=>{
    let newArr = []
    let newX = event.clientX
    let newY = event.clientY
    newArr.push(newX,newY)
    this.props.onReceiveCoordinates(newArr)
  }


  render(){
    return(
      <button onClick={this.handleClickEvent}></button>
    )
  }

}

export default CoordinatesButton
