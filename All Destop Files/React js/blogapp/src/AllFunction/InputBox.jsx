import React, { useState } from 'react';


export default function App()
{
let [data,setData]=useState(null);
let[print,setPrint]=useState(false);

function getdata(get)
{
  console.log(get.target.value)
  setData(get.target.value,"sdfghj")
  setPrint(false)
}

  return(
    <div>
      {
        print?<h1>{data}</h1>
        :null
        }
      <br></br>
      <input type='text' onChange={getdata}/>
      <button onClick={()=>setPrint(true)}>Print Data</button>
    </div> 
  )
}
