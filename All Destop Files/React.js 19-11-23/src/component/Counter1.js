import React, { useEffect } from 'react'

const Counter1 = ({number}) => {

    useEffect(()=>{
        console.log("functionl Component : Mounting")
   
        return()=>{
            console.log("Functionl Component :Removed")
        }
    },[number])
  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default Counter1;
