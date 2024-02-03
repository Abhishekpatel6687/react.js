// import logo from './logo.svg';
import React from "react";
import "./App.css";
import  Props from './Props';
import PropsMap from "./PropsMap";
 
// const name = <span>hello **** react</span>;

// const newElement = React.createElement(
//   "h2",
//   { className: "newElement" },
//   "Lets play"
// ); //without JAX

// const test = function () {
//   alert("hello abhishek");
// };

function App() {
const Data = [
  {
    id:1,
    name:'abhi',
    lname:'patel',
  },
  {
    id:2,
    name:'ravui',
    lname:'bnjbj',
  },
  {
    id:3,
    name:'shiv',
    lname:'singh',
  }
]

  return (
    <div className="App">
      {/* <h6> Abhishek Patel {name}</h6> */}
      {/* {newElement} */}
   
      {age(18)}<br></br>
      {/* <button onClick={test}>Start to</button> */}
      {/* <Props name={"import Abhishek"} email={" import abhi7868090@gamil.com" }/> */}
      {/* <Props name="import Pankaj" email=" import pankaj8090@gamil.com" other="other parameter"/> */}
      <Props  name={"hello import2"}/>
   


      <PropsMap data={Data}/>


    </div>
  )
}

const age=(a)=>{
  if (a >= 18) {
    return <span>yess</span>
  }
  else{
    return<span>no</span>
  }
}


export default App;
