import React, { Component } from 'react'

export class Counter extends Component {

    componentDidUpdate(prevprops,prevState){
        console.log(prevprops.number)
        console.log(this.props.number)
        if(prevprops.number !== this.props.number){
            console.log("component update")
        }
    }
  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    )
  }
}

export default Counter;

