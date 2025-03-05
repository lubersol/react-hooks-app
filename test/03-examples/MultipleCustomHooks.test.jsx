import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...'))

        expect( screen.getByText('Informacion de pokemon'))

        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar la data', () => {

        useFetch.mockReturnValue({
            data: [{ name: 'Lucia', id: 'abc' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Hola') ).toBeTruthy();
        expect(screen.getByText('Lucia') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ name: 'Lucia', id: 'abc' }],
            isLoading: false,
            hasError: null,
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });


})