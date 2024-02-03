import React,{useState} from "react";

export default function(){
    const[data,setData]=useState(1);
    
    return(
        <div>
    {/* {data?<h1>Wecome Abhishek</h1>:<h1>Welcome Guest</h1>} */}
    {data==1?<h1>Wecome Abhishek1</h1>:data==2?<h1>Wecome Abhishek2</h1>:<h1>Welcome Guest</h1>}

        </div>
    )

}