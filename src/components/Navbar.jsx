import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
const Navbar =()=>{
  return(
    <div className="Narbar" > 
    <div><h1> Jeffs Books</h1> </div>
    <Link to="/favorites">

    <h3>
      your favorites </h3>
    
    </Link>
    
    </div>
  )

}


export default Navbar