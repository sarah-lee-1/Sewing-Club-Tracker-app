import React, { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import "./App.css"; 
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editContactId, setEditContactId] = useState(null); 
// Event handler add new values to form (add new imput, add new property to the initial state & call event handler)
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value; 

    const newFormData = { ...AddFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData); 
  };
// function gets called when form is submitted
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)
  }

  return (
    <div className="app-container">
      <form>
     <table>
       <thead>
         <tr>Name</tr>
         <tr>Address</tr>
         <tr>Phone Number</tr>
         <tr>Email</tr>
         <tr>Actions</tr>
       </thead>
       <body>
         {contacts.map((contact) => (
           <Fragment>
             {editContactId === contact.id ? 
             ( <EditableRow/> ) : 
             ( <ReadOnlyRow contact={contact} 
             handleEditClick={handleEditClick}/> )
             }  
           </Fragment> 
         ))}
       </body>
     </table>
     </form>

          <h2>Add a Contact</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text" 
            name="fullName" 
            required="required" 
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
            ></input>
            <input 
            type="text" 
            name="address" 
            required="required" placeholder="Enter an address..."
            onChange={handleAddFormChange}
            ></input>
            <input 
            type="text" 
            name="phoneNumber" 
            required="required" 
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
            ></input>
            <input 
            type="email" 
            name="email" 
            required="required" 
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
            ></input>
            <button typ="submit">Add</button>
          </form>
    </div>
  );
}

export default App;
