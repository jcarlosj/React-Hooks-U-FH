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

    test( 'debe invocar handleAddTodo', () => {

        const value = 'Aprender Flutter';
        
        /** Simula el cambio de valor de la descripcion (campo input de nombre = description) */
        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                value,
                name: 'description'
            }
        } );

        const $formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );      //  Obtengo la funcion enlazada a la propiedad onSubmit de la etiqueta form
        // console.log( $formSubmit );
        $formSubmit({ preventDefault(){} });                                //  Simula handleAddTodo y pasamos como argumento la simulacion del event

        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );                     //  Verifica que la funcion handleAddTodo ha sido invocada al menos una vez
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) );   //  Verifica que la funcion handleAddTodo ha sido invocada pasandole un objeto 
        expect( handleAddTodo ).toHaveBeenCalledWith({                          //  Verifica que la funcion handleAddTodo ha sido invocada pasando un objeto con parametros especificos
            id: expect.any( Number ),       //  Espera cualquier ID de tipo Number
            description: value,
            done: false
        });
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );           //  Verifica los efectos de la ejecucion de la funcion reset establece el campo del formulario como vacio

    } );

} );