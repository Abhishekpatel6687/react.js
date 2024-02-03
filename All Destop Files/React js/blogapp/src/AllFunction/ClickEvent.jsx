import React from "react";
// alert("hello")
// export default function Apple() {
    
//     const showMyName= (sirname, number)=>{
        
//         alert("abhishek called "+ sirname + number);
//   }

//   return(
//     <>

//     <button onClick={()=>showMyName("Patel Gi", 1234)}> Show Name </button> 
//   <p>kjbdsfj</p>
//   </>
// )
// }
// export default function Alert(){
//     const Name =(Grue, number)=>{
//         alert("king is back " + Grue + number);

//     }
//     return(
//         <div>
//             <button onClick={()=>Name("Abhish ", 123)}>click</button>
//         </div>
//         )
// }


export default function king(){
    let data="abhishek patel";
    const event=()=>{
        // alert("This code is Good")
        data="patel";
        alert(data); //alert print data

    }
    return(
        <div>
        <h1>Plese Help Me</h1>
        <h1>{data}</h1>
            <button onClick={event}> click Me</button>
        </div>
    )
}


