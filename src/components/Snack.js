import React from 'react';
import {Link} from "react-router-dom";

function Snack({name}) {
  return(
    <div className="snack">
      <h1>{name}</h1>
      <Link to="/" >Back to Vending Machine</Link>
    </div>
  )
}

export default Snack;