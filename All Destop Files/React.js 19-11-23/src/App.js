import React, { Component } from 'react';
// import Counter from './component/Counter';
import Counter1 from './component/Counter1';
export class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  componentDidMount(){
    console.log("componentDidMount: when component render first time")
  }
 increment(){
    this.setState({count:this.state.count +1})
  }
  componentWillUnmount(){
    console.log("componentWillUnmount: Component Remove")
  }
  render() {
    return (
      <div>
        <Counter1 number={this.state.count}/>
        <button onClick={()=>{this.increment()}}>Click me</button>
      </div>
    )
  }
}

export default App
