import { useState } from "react";

export default function Student(props){
    const [state, setState]= useState(props)

function showAlert(){

    // It is use App.js components
    alert(state.name , state.email , state.other)
}
    return(
         <div style={{backgroundColor:"skyblue", margin:"15px"}}>
       
            <h1>Props=Make a Component pass to data with the help of Props</h1>
            <p>Update Props on button click </p> 
             <h3>{props.name} </h3>
             <h3>{props.email} {props.other}</h3>
             <h4>kjnsdf</h4>

             <button onClick={()=>showAlert()}>alert</button>
         </div>
    )
}
