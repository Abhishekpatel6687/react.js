import React, { useEffect } from "react";

export default function UseEffect1(props) {
  
  useEffect(() => {
    alert("data "+   props.dataNum + " " +  props.countNum);
  },[props.dataNum, props.countNum]);


  return (
    <div>
    <h1>data props: {props.dataNum}</h1>
    <h1>Count Props: {props.countNum}</h1>
    </div>
  )
}
