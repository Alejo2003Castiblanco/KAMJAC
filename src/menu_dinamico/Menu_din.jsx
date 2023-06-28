import React from "react";
import App from "../App";

function Menu_din(){
    return(
              
        <div className="menu-container">
			
			<input type="checkbox" id="openmenu" className="hamburger-checkbox"/><div className="hamburger-icon">
			  <div className="hamburguer-icon">
			  <label for="openmenu" id="hamburger-label">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			  </label>    
			</div>
			<div className="menu-pane">
			<nav>
            <ul class="menu-links">
                <option value=""><a href="">Compras 🛒</a></option>
			    <option value=""><a href="">Chat 💭</a></option>
                   </ul>
        </nav>
		  </div>
			</div>
			<div class="wrapper">
				</div>
				</div>
				
    )                                                                                                                   
}


export default Menu_din

