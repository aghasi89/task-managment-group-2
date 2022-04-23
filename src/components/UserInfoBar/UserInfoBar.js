import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../../pages/Contact";


export default () =>{
    const [shownMenu, setIsShownMenu] = useState(false);
    return (
        <div>
            <button className="infobutton"
          onMouseOver={(event) => (shownMenu ? setIsShownMenu(false) : setIsShownMenu(true))}
           >
            My info
            </button>
            {shownMenu? ( 
    <div className="menu">
     
        < Link to={"Login"} style={{textDecoration: "none"}}> 
         <div>
            <span> Login </span>
            </div>
            </Link> 
            < Link to={"About"} style={{textDecoration: "none"}}>
        <div>
      <span> About us</span>
    </div>
    </Link>
    < Link to={"Contact"} style={{textDecoration: "none"}}>
    <div>
      <span>Contact us</span>
    </div>
    </Link>
    < Link to={"LogOut"} style={{textDecoration: "none"}}>
    <div>
      <span>Log out </span>
    </div>
    </Link>

  </div>):null }
        </div>
    )
}