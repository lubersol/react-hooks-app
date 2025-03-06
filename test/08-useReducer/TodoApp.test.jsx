import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/UseTodo';

jest.mock('');


describe('Pruebas en componente <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Hacer las tareas', done: false },
            { id: 2, description: 'Hacer las compras', done: true },
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),
    });

    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);
        screen.debug();

        expect (screen.getByText('Hacer las tareas')).toBeTruthy();
        expect (screen.getByText('Hacer las compras')).toBeTruthy();
        expect (screen.getByText('textbox')).innerHTML();

    });

});