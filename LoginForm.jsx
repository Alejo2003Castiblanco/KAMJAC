import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState(''); 

  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    console.log('Email:', email);
    console.log('Password:', password);
    // También puedes restablecer los valores de los campos después de enviar el formulario
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <Link to="/Formulario">Regístrate</Link>
      </p>
    </div>
  );
};

export default LoginForm;


