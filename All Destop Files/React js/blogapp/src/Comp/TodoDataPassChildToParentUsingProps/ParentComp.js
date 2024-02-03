import React, { useState } from 'react'
import ChildComp from './ChildComp';

const ParentComp = (props) => {
    console.log(props)
    // const[childData, setChildData] = useState('')
    const [childData, setChildData] = useState('');

    const handleChildData = (data) => {
      // Do something with the data in the parent component
      console.log('Data from child:', data);
      setChildData(data); 
    }
  return (
    <div>
      <ChildComp DataPassParent={handleChildData} />
      
    <h4>{childData}</h4>
    </div>
  )
}

export default ParentComp;
