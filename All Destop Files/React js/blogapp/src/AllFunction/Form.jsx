import React,{useState} from "react";

export default function App(e){
  const[data,setdata]=useState("");
  const[final,finalVal]=useState(true);
  function print(e){
    console.log(data,final);
e.preventDefault();
  }

  return(
    <div>
      <h1>form Handel</h1>
      <form onSubmit={print}>
        <input type="text" onChange={(e)=>setdata(e.target.value)}></input>
        <input type="text" onChange={(e)=>setdata(e.target.value)}></input>
        <input type="text" onChange={(e)=>setdata(e.target.value)}></input>
        <select onChange={(e)=>finalVal(e.target.value)}>
          <option>Lucknow</option>
          <option>Bengaluru</option> 
          <option>Delhi</option>
        </select>
        <button type="submit">click</button>
      </form>
    </div>
  )
}