

import React,{Component} from 'react';

 class State extends Component {

  constructor(){
    super();
    this.state={
      name:"Verma",
      data:0
    }
  }
    
  render() {
    return (
      <div>
      <h1>{this.state.data}</h1>
        <h1>Abhishek {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Patel", data:this.state.data+1})}>click update</button>
      </div>
    )
  }
}
export default State;