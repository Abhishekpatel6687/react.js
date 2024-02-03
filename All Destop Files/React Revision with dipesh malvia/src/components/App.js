import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from  "./ContactCard";

function App() {
  const contants=[
    {
      id:"1",
      name:"Abhishek Patel",
      email:"abhi123@gamil.com",
    },
    {
      id:"2",
      name:"Lucky",
      email:"lucky786@gamil.com",
    },
  ];
  return (
    <div className="ui container">

      <Header />
     <AddContact />
       <ContactList contants={contants}/>
      <ContactCard />
    </div>
  );
}

export default App;
