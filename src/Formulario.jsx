import { appendErrors, useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import React from 'react';


const Formulario = () => {

    const{ register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            documento: '',
            nombre: '',
            apellido: '',
            email: '',
            edad: '',
            ciudad:'',
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    }
    const incluirTelefono = watch('incluirTelefono');
    return <div className="formulario-container">
        <h2>Ingrese sus datos para registrarse.</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
                
                <input type="number" placeholder="Documento" {...register('documento', {
                     required: true, 
                     maxLength: 11
                })} />
                {errors.documento?.type === 'required' && <p>El campo Documento es requerido</p>}
                {errors.documento?.type === 'maxLength' && <p>El campo Documento debe tener menos de 11 caracteres</p>}
            </div>
            <div>
                
                <input type="text"  placeholder="Nombres" {...register('nombre', {
                     required: true, 
                     maxLength: 20
                     ,pattern: /^[A-Za-z]+$/ // Expresión regular para validar solo caracteres alfabéticos
                })} />
                {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
                {errors.nombre?.type === 'pattern' && <p>El campo Nombre solo acepta caracteres alfabéticos</p>}

            </div>
            <div>
                
                <input type="text"  placeholder="Apellidos" {...register('apellido', {
                     required: true, 
                     maxLength: 20
                     ,pattern: /^[A-Za-z]+$/ // Expresión regular para validar solo caracteres alfabéticos
                })} />
                {errors.apellido?.type === 'required' && <p>El campo Apellido es requerido</p>}
                {errors.apellido?.type === 'maxLength' && <p>El campo Apellido debe tener menos de 20 caracteres</p>}
                {errors.apellido?.type === 'pattern' && <p>El campo Apellido solo acepta caracteres alfabéticos</p>}

            </div>
           
            <div>
                
                <input type="text" placeholder="Correo Electrónico" {...register('email', {
                     required: true, 
                     pattern:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.email?.type === 'required' && <p>El campo Correo Electrónico es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El formato del Correo Electrónico es incorrecto</p>}
            </div>
            <div>
                
                <input type="text" placeholder="Edad" {...register('edad', {
                    required: true, 
                    validate: edadValidator
                })} />
                {errors.edad?.type === 'required' && <p>El campo Edad es requerido</p>}
                {errors.edad && <p>La edad debe estar entre 18 y 65 años </p>}
            </div>
            <div>
                <label>Ciudad</label>
                <select {...register('ciudad')}>
                    <option value="cal">Cali</option>
                    <option value="med">Medellin</option>
                    <option value="bog">Bogotá</option>
                </select>
            </div>
            <div>
                <label>¿Incluir Télefono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            { incluirTelefono && (
                <div>
                <label>Télefono</label>
                <input type="number" {...register('telefono')} />
            </div>
            )}
            
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
}
export default Formulario;