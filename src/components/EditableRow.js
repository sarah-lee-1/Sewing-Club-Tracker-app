import React from 'react' 

const EditableRow = () => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a name..." 
                    name="fullName"
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an address..."
                    name="address"
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Please enter a phone number..."
                    name="phoneNumber"
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Please enter an email..."
                    name="email"
                ></input>
            </td>
            <td></td>
        </tr>
    );
};

export default EditableRow; 