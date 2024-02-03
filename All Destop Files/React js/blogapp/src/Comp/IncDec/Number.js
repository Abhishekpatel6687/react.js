import React, { useState } from 'react'

const Number = () => {
    const [state, setState] =useState(0)

    const Inc =()=>{
       if( state<10){
           setState(state+1)
        }
    }
    const Dec =()=>{
        if(state>0){
            setState(state-1)
        }
    }


  return (
    <div>
      <button onClick={()=>Inc()} >Inc</button>
      <h1>{state}</h1>
      <button onClick={()=>Dec()} >Dec</button>
    </div>
  )
}

export default Number
