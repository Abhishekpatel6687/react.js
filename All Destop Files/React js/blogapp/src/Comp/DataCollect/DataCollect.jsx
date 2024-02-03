import React, { useState } from "react";
import "./Style.css";

export default function Data(e) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [sugar, setSugar] = useState("");

  const [data, setData] = useState([]);

  function addData(e) {
    e.preventDefault();
    if (!name || !type || !size || !sugar) {
      return alert("Fill data fields");
    }

    let item = {
      name: name,
      type: type,
      size: size,
      sugar: sugar,
    };

    setData([...data, item]);

    setName("");
    setType("");
    setSize("");
    setSugar("");
  }

  console.log("ddd", data);

  return (
    <div>
      <div className="container">
        <h1>Current Order</h1>
        <div className="tableRowContainer">
          <div className="tableRow">
            <span> Name </span>
            <span> Type </span>
            <span> size </span>
            <span> sugar</span>
          </div>
          <div>

          
          {data.map((item, index) => {
            return (
              <div className="tableRow" style={{background:'#ffffff99', borderBottomRightRadius: index === data.length -1 ? '12px':'' }}>
                <span> {item.name} </span>
                <span>  {item.type} </span>
                <span>  {item.size} </span>
                <span> {item.sugar}</span>
              </div>
            );
          })}
          </div>
        </div>
        <div className="form"></div>
        <div className="userForm">
          <h1>I want a coffee too!</h1>
          <form onSubmit={addData}>
            <span>Your Name</span>
            <input
              type="text"
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <span>Coffee Type</span>
            <input
              type="text"
              value={type ?? ""}
              onChange={(e) => setType(e.target.value)}
            />
            <br />
            <br />
            <span>What Size?</span>
            <input
              type="text"
              value={size ?? ""}
              onChange={(e) => setSize(e.target.value)}
            />
            <br />
            <br />
            <span>Any Sugar?</span>
            <input
              type="text"
              value={sugar ?? ""}
              onChange={(e) => setSugar(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Add Data</button>
          </form>
        </div>
      </div>
      {/* <h1>{name}</h1>
      {type}
      {size}
      {sugar} */}
    </div>
  );
}
