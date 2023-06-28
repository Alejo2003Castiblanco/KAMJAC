const express = require("express");
const info = express();
const mysql = require("mysql");
const cors = require("cors");
const { render } = require("@testing-library/react");



const bd = {
  host: "localhost",
  user: "root",
  password: "",
  database: "kamjac",
};


info.get("/", (req, res) => {
  res.send("hola soy una ruta de api");
});

info.listen(4000, () => {
  console.log("corriendo en un puerto");
});