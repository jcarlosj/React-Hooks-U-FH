import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { TodoForm } from '../../../components/use-reducer/TodoForm';

describe( '<TodoForm />', () => {

    const
        handleAddTodo = jest.fn(), 
        wrapper = shallow(
            <TodoForm handleAddTodo={ handleAddTodo } />
        );

    test( 'debe desplegar correctamente', () => {

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'NO debe invocar handleAddTodo', () => {

        const $formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );      //  Obtengo la funcion enlazada a la propiedad onSubmit de la etiqueta form
        
        // console.log( $formSubmit );
        $formSubmit({ preventDefault(){} });                                //  Simula handleAddTodo y pasamos como argumento la simulacion del event

        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );                 //  Verifica que la funcion handleAddTodo no ha sido invocada

    } );

} );