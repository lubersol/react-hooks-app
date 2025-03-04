import  {useState } from 'react';
import { useForm } from '../hooks/UseForm';

export const TodoItem = ({ todo, onDeleteTodo }) => {

    const [todo, setTodo] = useState([]);

    return (
        <li key={ todo.id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            <button 
                className="btn btn-danger"
                onClick={ () => onDeleteTodo(todo.id) }
            >
                Borrar
            </button> 
        </li>
    )
}