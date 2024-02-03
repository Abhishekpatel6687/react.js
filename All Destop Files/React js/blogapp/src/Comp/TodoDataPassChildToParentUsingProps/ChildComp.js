import React, { useState } from 'react'
const ChildComp = (props) => {
    const[data, setData] = useState('')


    const DataPassParent = () => {
       props.DataPassParent(data)
    }

  return (
    <div>
      <input type='text' value={data} onChange={(e)=> setData(e.target.value)}/>
      <button onClick={DataPassParent}> Add </button>
    </div>
  )
}

export default ChildComp;

