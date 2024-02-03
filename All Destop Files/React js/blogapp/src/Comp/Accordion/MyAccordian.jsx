import React, {  useContext, useState } from 'react'
import { MyContext } from './Accordion'

const MyAccordian = ({question, answer}) => {
  const {name} = useContext(MyContext)
  const [show, setShow] = useState(false) 
  return (
    <>
    <div className='main-heading'>
        <p onClick={()=> setShow(!show)}>{show?"✕":"✓"}</p>
      <h3>{question}
      {name}
      </h3>
    </div>
    { show && <p className='answers '>{answer}</p> }
    </>
  )
}

export default MyAccordian;
