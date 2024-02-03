import React, { Component } from 'react'

export default class DidUpdate extends Component {
    constructor(){
        super() 
        console.log("constructor")
        this.state={
            name:"Patel",
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.log("did update",preState.count,this.state.count);
        console.log("did update",snapshot);
    
        if(this.state.count<10){
            this.setState({count:this.state.count+1})

        }
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.name}{this.state.count}</h1>
        <button onClick={()=>this.setState({name:"Abhishek Patel"})}>Update Value</button>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}
        <button onClick={()=>{this.setState({count:1})}}>Update Count</button>
      </div>
    ) 
  }
}
