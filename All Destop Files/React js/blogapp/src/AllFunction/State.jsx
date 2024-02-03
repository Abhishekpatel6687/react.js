import { useState } from "react";


export default function State(){
    // let [data,setData]=useState("abhi");
    // let [data,setData]=useState(0);
    // function updateData(){
    // //  setData("patel");
    //  setData(data+1);
     
 
    let [data,setData]=useState({
        isToggle: false,
        firstName: 'Abhishek', 
        secondName: 'yadav'
    });
    function updateData(){
        let dataObj = {}
        if(data.isToggle){
           dataObj.firstName = 'Abhishek'   
           dataObj.secondName = 'Yadav'  
           dataObj.isToggle = false 
        }else{
            dataObj.firstName = 'Pankaj'   
            dataObj.secondName = 'Patel' 
            dataObj.isToggle= true 
        }
     setData(dataObj);
    }
    // console.warn("------------")
    return(
        <div className="App">
     {`${data.firstName} `} 
     {data.secondName}
            <h1>State = It is Object to Store the data.</h1>
            <p>use= It is click  componant to know something update in state.</p>

            <button onClick={updateData}>Update Data</button>
        </div>
    
    )
}