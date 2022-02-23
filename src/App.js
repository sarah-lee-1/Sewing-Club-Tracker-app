import React from "react";
import "./App.css"; 

function App() {
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
         <tr>
           <td>Sally Smith</td>
           <td>132 N Lake Dr</td>
           <td>Whitefish Bay</td>
           <td>sallysmith@aol.com</td>
           <td></td>
         </tr>
       </body>
     </table>
    </div>
  );
}

export default App;
