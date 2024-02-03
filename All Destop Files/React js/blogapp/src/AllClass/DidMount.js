import React, { Component } from 'react'

export default class DidMount extends Component { 

    constructor(){
        super()
        console.log("constructor")
        
    }
componentDidMount(){
    console.log("componentDidMount");
}
    
  render() {
   console.log("render");
    return (
      <div>
        <h1>componentDidMount</h1>
      </div>
    )
  }
}
