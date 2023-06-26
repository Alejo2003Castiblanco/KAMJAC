import { appendErrors, useForm } from "react-hook-form";
import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

// Crear el contexto
const MiContexto = createContext();

const MiProveedor = () => {

    const{ register, formState: { errors }, watch, handleSubmit } = useForm({
       
    });
    const onSubmit = (data) => {
        console.log(data);
    }
  
    return  <div className="formulario-container1">
        <h2>Inicie Sesión.</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <div>
                
                <input type="text" placeholder="Correo Electrónico" {...register('email', {
                     required: true, 
                     pattern:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.email?.type === 'required' && <p>El campo Correo Electrónico es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El formato del Correo Electrónico es incorrecto</p>}
            </div>
            
           
            
           
            
            <input type="submit" value="Enviar"></input>
        </form>
        <p>
      ¿No tienes una cuenta?{' '}
      <Link to="/Formulario">Regístrate</Link>
    </p>
    </div>
}
export default Formulario1;
export { MiContexto, MiProveedor };