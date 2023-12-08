import * as React from "react";


 const EmailTemplate = ({ firstName, phone}) => (
  <div >
    <h1>Kedves City Tax Könyvelőiroda!</h1>
    <h2>Szuper hírünk van :) Egy kedves érdeklődő visszahívást kér!</h2>
    <p>Küldő : {firstName}</p>
    <p>Telefonszám: {phone}</p>
  </div>
);

export default EmailTemplate;