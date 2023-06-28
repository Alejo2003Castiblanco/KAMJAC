import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componentes/login/principal';
import LoginForm from './Componentes/login/form/LoginForm';
import Formulario from './Formulario';



function App() {
    return(
		<div>
			<BrowserRouter>
				<Routes>
				<Route path='*' element={<Login />}/>
				<Route path='form' element={<LoginForm />}/>
				<Route path='form2' element={<Formulario/>}/>
				</Routes>
			</BrowserRouter>
		</div>
    );
}
export default App;
