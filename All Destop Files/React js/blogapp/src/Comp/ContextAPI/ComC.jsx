import React from "react";
import { FirstName, LastName } from "./ContextAPI";

// It is contextAPI

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return ( 
                  <h1>
                    ContextAPI =: my name is {fname} {lname}
                  </h1>
                );   
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
