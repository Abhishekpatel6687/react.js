import React, { useState } from "react";
import "./DemoCalc.css";

// const btn = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "C"];

//  const onlySymbol = {
//        "=": true,
//        "-" :true,
//        "*":true,
//        "/":true,
//        "+":true,

//  }

// const DemoCalc = () => {
//   var [value, setValue] = useState("");

//   function AllDigit(item) {

//     let isSymbol = onlySymbol[item]
//     let isLastDigitSymbol = onlySymbol?.[value.charAt(value?.length -1)]

//     console.log("hh",value.charAt(value?.length -1))
//     let checkLastValue = onlySymbol[value.length-1]?"=":"";

//     if(isSymbol && isLastDigitSymbol || item=== 'C' || checkLastValue==='='){
//         return alert('You cannot enter value')
//     }

//     let newval = value + item
//     setValue(newval);
//   }

//   function calculate() {
//     // const vallue
//   }

//   return (
//     <div className="container">
//       <div className="header">
//         <input type="text"  value={value ?? ''} />

//         <div className="digit">
//           {btn.map((item, index) => {
//             return (
//               <button
//                 onClick={() => {
//                   AllDigit(item);
//                 }}
//                 className="bbtn"
//               >
//                 {item}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const btn =[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "C"]
const DemoCalc = () => {
  const [value,setValue]=useState("");

  // function AddVal(e){
  //   setValue(e. target.value);
  // }


  return(
    <> 
    {/* <h1>{value}</h1> */}
      <div className="container">
     
        <div className="header">
          <input type="text" value={value}/>
          <button onClick={(e)=>setValue(value+e.target.value)} value={1}>1</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={2}>2</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={3}>3</button> 
          <button onClick={(e)=>setValue(value+e.target.value)} value={"-"}>-</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={4}>4</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={5}>5</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={6}>6</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={"+"}>+</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={7}>7</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={8}>8</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={9}>9</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={"*"}>*</button>
          <button onClick={(e)=>setValue(value+e.target.value)} value={0}>0</button>
          <button onClick={(e)=>setValue(value.slice(0, -1))} value={"DE"}>DE</button>
          <button onClick={(e) => setValue(eval(value))} value={"="}>=</button>
          <button onClick={(e)=>setValue("")} value={"AC"}>AC</button>
        </div>
      </div>
    </>
  );
};

export default DemoCalc;
