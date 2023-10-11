import * as React from "react";


 const EmailTemplate = ({ firstName, message, email}) => (
  <div >
    <h1>Hello Studio Bromo!</h1>
    <h2>Üzenetet kaptál</h2>
    <p>Küldő : {firstName}</p>
    <p>Üzenet: {message}</p>
    <p>Email cím : {email}</p>
  </div>
);

export default EmailTemplate;