import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import React from 'react';
import Formulario1, { MiProveedor } from './Formulario1';

function App() {
  return (
    <MiProveedor>
    <div className="App">
     
      <Formulario1/>
      </div>
    </MiProveedor>
  );
}

export default App;
