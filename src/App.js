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

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value; 

    const newFormData = { ...AddFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData); 
  };

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
            <input 
            type="text" 
            name="fullName" 
            required="required" 
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
            />
            <input 
            type="text" 
            name="address" 
            required="required" placeholder="Enter an address..."
            onChange={handleAddFormChange}
            />
            <input 
            type="text" 
            name="phoneNumber" 
            required="required" 
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
            />
            <input 
            type="email" 
            name="email" 
            required="required" 
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
            />
            <button typ="submit">Add</button>
          </form>
    </div>
  );
}

export default App;
