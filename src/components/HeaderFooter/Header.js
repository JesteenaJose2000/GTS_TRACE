import React from 'react'
import farmsimple from "../../images/logo.jpg";
import "./Headerfooter.css";

export default function Header() {
    return (
        <div className="header">
           
                <img className="logo" src={farmsimple} width="100" height="50"/> 
            
         <div class="logoName" style={{"color": "rgb(79, 79, 79)"}}><b>GFS</b> Trace</div>
        <div className="spacer"></div>
          <span className="userDetails" >Align Agith </span> | 
      <span className="userDetails" style={{"color": "green", "float": "right"}}> Owner</span>
        
                
               <button className="logout" >
                   LOGOUT
               </button>
               
           
            
        </div>
    )
}
