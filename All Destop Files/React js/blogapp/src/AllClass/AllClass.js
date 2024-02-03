import React,{Component} from 'react';

// import State from "./State";
// import Props from "./Props";
// import Constructor from "./Constructor";
// import Render from "./Render";
// import DidMount from "./DidMount";
// import DidUpdate from "./DidUpdate";
import ShouldComponentUpdate from "./ShouldComponentUpdate";


class AllClass extends Component {

  // constructor(){
  //   super();
  //   this.state={
  //     name:"pankaj"
  //   }
  // }
  
  render() {
    return (
      <div> 
      <h1>AllClass</h1>
        {/* <Props name={this.state.name} email="abhi@gmail.com"></Props> */}
        {/* <button onClick={()=>this.setState({name:"abhishek"})}>Upadate Name</button>  */}

        {/* <State/> */}
        {/* <Constructor/> */}
        {/* <Render/> */}
        {/* <DidMount/> */}
        {/* <DidUpdate/> */}
        <ShouldComponentUpdate/>
      </div>
    )
  }  
}
export default AllClass;