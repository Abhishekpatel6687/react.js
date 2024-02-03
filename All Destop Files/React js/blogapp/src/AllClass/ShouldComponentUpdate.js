import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {

    constructor(){
        super()

        this.state={
            name:"abhi",
            count:0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count)
        return false;
    }
  render() {
    return (
      <div>
        <h1>shouldComponentUpdate  {this.state.name} {this.state.count}</h1>
        <button onClick={()=>{this.setState({name:"abhishek"})}}>click</button>
        <button onClick={()=>this.setState({count:this.state.count+1})}>count</button>
      </div>
    )
  }
}
