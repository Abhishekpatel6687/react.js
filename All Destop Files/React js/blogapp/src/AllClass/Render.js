import React, { Component } from 'react'

export default class Render extends Component {
 constructor(){
    super()
    this.state={
        name:"abhi"
    }
 }
  render() {
    return (
      <div>
        <h1>User Name {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"AbhishekPatel"})}>Upadate</button>
      </div>
    )
  }
}
