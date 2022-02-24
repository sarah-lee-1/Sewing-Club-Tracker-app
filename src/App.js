import React, { useState } from "react";
import "./App.css"; 
import data from "./mock-data.json"

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  return (
    <div className="app-container">
     <table>
       <thead>
         <tr>Name</tr>
         <tr>Address</tr>
         <tr>Phone Number</tr>
         <tr>Email</tr>
         <tr></tr>
       </thead>
       <body>
         {contacts.map((contact) => (
           <tr>
           <td>{contact.fullName}</td>
           <td>{contact.address}</td>
           <td>{contact.phoneNumber}</td>
           <td>{contact.email}</td>
           <td></td>
         </tr>
         ))}
       </body>
     </table>
          <h2>Add a Contact</h2>
          <form>
            <input type="text" name="fullName" required="required" placeholder="Enter a name..."/>
            <input type="text" name="address" required="required" placeholder="Enter an address..."/>
            <input type="text" name="phoneNumber" required="required" placeholder="Enter a phone number..."/>
            <input type="email" name="email" required="required" placeholder="Enter an email..."/>
            <button typ="submit">Add</button>
          </form>
    </div>
  );
}

export default App;
