import React, { useState } from "react";

export default function Login() {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [userErr, setUserErr]= useState(false)
  const [passErr, setPassErr]= useState(false)
  function Submit(e) {

    if(User.length<4 || Password.length<4){
      alert("type correct value")
    }
    else{ 
      alert("all good :)")
    }
    
    e.preventDefault();
  }
  function userHandler(e){
    let item= e.target.value;
  
  if(item.length<4){
    setUserErr(true)
    
  }
  else{
    setUserErr(false)
  }
  setUser(item)
}
function passwordHandler(e){
  let item1=e.target.value;

  if(item1.length<4){
    setPassErr(true)
  }
  else{
    setPassErr(false)
  }
  setPassword(item1)
}

  return (
    <div>
      <form onSubmit={Submit}>
        <input type="text" onChange={userHandler}/>{userErr?<span>User not valid</span>: ""}
        <br />
        <br />
        <input
          type="password"
 onChange={passwordHandler}/>{passErr?<span>password not valid</span>: ""}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
