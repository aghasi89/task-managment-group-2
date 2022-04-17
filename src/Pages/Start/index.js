import "./style.css";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
export default () => {   const handleSubmit = (e) => {
    e.preventDefault();}
    return (
        <div className="homedesign">
            <div className="start">
                <div className="tasks">
                <span className="span">Manage Your Task  </span>
                </div>
             <div className="botton"> <button onClick={handleSubmit}> <span className="span1">Get Start</span> </button>   </div>
                     
      </div>          </div>
  
)}