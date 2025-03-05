// import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {


    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //Desestructuramos el objeto formState
    // const { username, email, password } = formState;


    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"   
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="luber@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}