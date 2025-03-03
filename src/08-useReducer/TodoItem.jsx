import  {useState } from 'react';
import { useForm } from '../hooks/UseForm';

export const TodoItem = ({ todo }) => {

    const [todo, setTodo] = useState([]);
    const { onResetForm  } = useForm();

    return (
        <li key={ todo.id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            <button 
                className="btn btn-danger"
                onClick={ onResetForm }
            >
                Borrar
            </button> 
        </li>
    )
}