import React, { useContext } from 'react'
import ComC from './ComC';
import { FirstName,LastName } from './ContextAPI';

// It is usecontext  Hook

const ComB = () => { 
 const fname = useContext(FirstName)
 const lname = useContext(LastName)

  return (
    <div>
     <h1>Contaxt Hook =:  I am {fname} {lname}</h1>

     <ComC/>
    </div>
  )
}

export default ComB;
