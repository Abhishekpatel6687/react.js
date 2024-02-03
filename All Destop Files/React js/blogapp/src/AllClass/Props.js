import React, { Component } from 'react';

export default class Props extends Component {
     constructor(){
        super()
     }
        
  render() {  
    console.log(this.props);
    return (
      <div>
       <h1>{this.props.name}</h1>
        {this.props.email}<br></br>
        <h1>   abhishekPatel  </h1>
         
      </div>
    )
  }
}
