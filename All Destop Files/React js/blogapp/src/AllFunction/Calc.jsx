import React from 'react';

export default function Calc() {
     
    function add(a,b){  
      let sum = a+b;
      return sum;

    }
    function sub(a,b){  
      let sub = a-b;
      return sub;
    }
    function multi(a,b){  
      let multi = a*b;
      return multi;
    }
    function div(a,b){  
      let div = a/b;
      return div;
    }

  return (
    <div>
      <ul>
        <li>Add = {add(50,5)}</li>
        <li>Sub = {sub(50,5)}</li>
        <li>Multi = {multi(50,5)}</li>
        <li>Div = {div(50,5)}</li>
      </ul>
    </div>
  )
};
