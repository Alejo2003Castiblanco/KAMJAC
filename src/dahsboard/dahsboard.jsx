import React from "react";
import Navbar from "./navbar";
import Barra from "./menu.js";
import "../../style/app.css";

export default function Dashboard() {
  return(
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="colum">
          <Barra />
        </div>
      </div>
    </div>
  </div>
  );
}