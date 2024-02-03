import React, { createContext, useState } from 'react'
import questions from './AccordionAPI';
import "./Accordion.css";
import MyAccordian from './MyAccordian';

export const MyContext = createContext()
const Accordion = () => {
  const [data,setData] = useState(questions)
  return (
    <MyContext.Provider value={{name:'pk'}}>

    <div className='container'>
    <section className='main-div'>
    <h1>React interview question answer</h1>
    {
      data.map((curElem) => {
            const {id}=curElem;
      return <MyAccordian name={id}{...curElem}/>
    })
    }

    </section>
    </div>
    </MyContext.Provider>
  )
}

export default Accordion;
