// import React, { useEffect, useState } from "react";

// const UseEffect =()=>{
//   const [data,setData]= useState(0)
//   return(
//     <div>{data}
//       <button onClick={()=>{setData(data+1)}}> cloud me</button>
//     </div>
//   )
// }

//-----------------------------------------------------------------

// const  UseEffect =() => {
//   const [data, setData] = useState(10);
//   const [count, setCount] = useState(100);
  
//   useEffect(()=>{
//     alert("abhishek "+ count);
//    }, [data]);
   
//    return (
//      <div>
//     <h1> {data} </h1>
//     <h1>{count} </h1>
//       <button onClick={() => setData(data + 1)}> Update data</button>
//       <button onClick={() => setCount(count + 1)}> Update Counter</button>
//     </div>
//   );
// }
// export default UseEffect;

//-----------------------------------------------------------------------

import React,{useState} from 'react';
import UseEffect1 from './UseEffect1.jsx';

export default function UseEffect() {

  const[data, setData]=useState(10);
  const[count, setCount]=useState(100);

  return (
    <div>
  {/* use props */}
    <UseEffect1 countNum={count} dataNum={data}/> 

      <button onClick={()=>setData(data+1)}>Data update</button>
      <button onClick={()=>setCount(count+1)}>Count update</button>
      </div>
  )
}
