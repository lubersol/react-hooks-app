import { useForm } from '../hooks/UseForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        id: '',
        description: '',
        done: false
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if( description.length <= 1 ) return;

        const onNewTodo = {
            id: new Date().getTime(),
            description,
            done: false

        }

        onNewTodo(onNewTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}