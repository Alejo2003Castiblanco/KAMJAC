import React from "react";
import App from "../App";

function Menu_din(){
    return(
<div className="menu_din">
              
        <div className="menu-container">
			
			<input type="checkbox" id="openmenu" className="hamburger-checkbox"/><div className="hamburger-icon">
			  <label for="openmenu" id="hamburger-label">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			  </label>    
			</div>
            <ul class="menu-links">
            <div className="nav_items" id="navitems">
                <option value=""><a href="">COMPRAS 🛒</a></option>
			    <option value=""><a href="">CHAT 💭</a></option>
                  </div> 
                   </ul>
        
		  </div>
</div>

    )                                                                                                                   
}


export default Menu_din

