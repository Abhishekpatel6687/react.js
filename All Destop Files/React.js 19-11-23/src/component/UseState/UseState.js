import React, { useState } from 'react'

const UseState = () => {
   const[inputValue,newValue]=useState("abhis");

   const onChange=(event)=>{
    const newVal=event.target.value;
    newValue(newVal)
   }
  return (
    <div>
    <h1>{inputValue}</h1>
      <input type='text' value={inputValue} placeholder='type anything' onChange={onChange} />
    </div>
  )
}

export default UseState
