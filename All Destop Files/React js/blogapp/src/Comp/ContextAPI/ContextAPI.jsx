  // ContextAPI  and useContext Hook by thapa Tichnical   

import React, { createContext } from 'react'
import ComA from './ComA';
// create Context() === you create a context state
// provider === you need a provider to all person use
// consumer ===  data access 

const FirstName = createContext();
const LastName = createContext();
const ContextAPI = () => {
  return (
    <>
    <FirstName.Provider value={"Abhishek"}>
    <LastName.Provider value={"Patel"}>

    <ComA/>

    </LastName.Provider>
    </FirstName.Provider>

    </>
  )
}

export default ContextAPI;
export { FirstName, LastName };
