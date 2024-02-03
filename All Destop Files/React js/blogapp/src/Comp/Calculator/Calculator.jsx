import React, { useState } from "react";
import styles from "./calculator.module.css";



const initialValues= {num1: null,num2:null, finalValue: null }
export default function Calculator() {
  const [state, setState] = useState(initialValues);

  const { num1 , num2 , finalValue}= state
   
  const calculate = (type)=>{
    
    switch(type){
        case 1:
            return setState({...state, finalValue: num1+num2})
        case 2:
            return setState({...state, finalValue: num1 > num2 ? num1 -num2 : num2 - num1}) 
        case 3:
            return setState({...state, finalValue: num1* num2})
        case 4:
            return setState({...state, finalValue:  num1 > num2 ? num1 /num2 : num2 / num1}) 
        case 5:
            return setState({...initialValues})
        default:
            return    
                   
    }

  }

  return (
    <div>
      <h1 className="h1">Add two number</h1>
      <div className="numberInputs">
        <span>
      
          Number1:
          <input
            type="number"
            value={num1 ?? ''}
            onChange={(e) => setState({...state, num1: +e.target.value})}
          ></input>
        </span>
        <br></br>
        <span>
          Number2:
          <input
            type="number"
            value={num2 ?? ''}
            onChange={(e) =>setState({...state, num2: +e.target.value})}
          ></input>
        </span>
      </div>

      <h2>{finalValue}</h2>

      <button onClick={()=>calculate(1)}> + </button>
      <button onClick={()=>calculate(2)}> - </button>
      <button onClick={()=>calculate(3)}> * </button>
      <button onClick={()=>calculate(4)}> / </button>
      <button className={styles.h1} onClick={()=>calculate(5)}> RESET </button>
    </div>
  );
}
