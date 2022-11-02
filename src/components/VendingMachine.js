import React from 'react';
import {Link} from "react-router-dom";


function VendingMachine({links}) {

  return(
    <React.Fragment>
      <h1>Vending Machine</h1>
      <h3>Make Your Choice</h3>
      {links.map(link => <div><Link key={link} to={link}>{link}</Link></div>)}
    </React.Fragment>
  )
}

export default VendingMachine;