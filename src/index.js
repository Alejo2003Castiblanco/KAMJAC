import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement('div', {className: 'continer'},
    React.createElement('div', {className: 'row'},
    React.createElement('div', {className: 'col-md-10 col-md-offset-1'},
    React.createElement('div', {className: 'home-content'},
    React.createElement('h1', {className: 'white-text'}, 'Somos Dasaga'),
    React.createElement('p', {className: 'white-text'}, 'Muebles & Accesorios S.A.S.'),
    React.createElement('a', {className: 'orange-btn', href: "https://www.google.com/"}, 'Ir a Portafolio')
    ))))
    //href:"https://www.google.com/"
);
//React.createElement('div', {className: 'bg-img'},
//React.createElement('div', {className:'overlay'}))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();