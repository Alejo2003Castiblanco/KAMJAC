import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componentes/login/principal';
import LoginForm from './Componentes/login/form/LoginForm';
import Menu from './Componentes/menu/menu';
//<Route path='/menu' element={<Menu />}/>


function App() {
    return(
		<div>
			<BrowserRouter>
				<Routes>
				<Route path='/*' element={<Login />}/>
				<Route path='/form' element={<LoginForm />}/>
				<Route path='/menu' element={<Menu />}/>
				</Routes>
			</BrowserRouter>
		</div>
    );
}
export default App;
