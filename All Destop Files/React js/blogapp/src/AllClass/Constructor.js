import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(){
        super();
        console.log("constructor");

        this.state={
            name:"Patel"
        }

    }
  render() {
    console.log("render");

    return ( 

      <div>
    <h1>Abhishek {this.state.name}</h1> 
    
      </div>
    )
  }
}
