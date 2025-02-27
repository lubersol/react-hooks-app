import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'luber',
        email: 'luber@gmail.com',
    });

    const { username, email } = formState;
    
    //Metemos las llaves en target para desestructurar
    const onInputChange = ({ target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            //Entre corchetes significa que es computado
            [name]: value
        })
    };

    //Se recomienda crear tantos useEffect como efectos secundario que queramos llamar
    useEffect( () => {
        console.log('useEffect called');
    }, []);

    useEffect( () => {
        console.log('formState changed');
    }, [formState]);

    useEffect( () => {
        console.log('email changed');
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
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

            {
                (username === 'luber2') && <Message />
            }
            
        </>
    )
}