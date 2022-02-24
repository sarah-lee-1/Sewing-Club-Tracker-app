import React from 'react' 

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a name..." 
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an address..."
                    name="address"
                    value={editFormValue.address}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Please enter a phone number..."
                    name="phoneNumber" 
                    value={editFormValue.phoneNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    required="required"
                    placeholder="Please enter an email..."
                    name="email" 
                    value={editFormValue.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};

export default EditableRow; 
