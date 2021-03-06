import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Components */
import { LoginPage } from '../../../components/use-context/LoginPage';

/** Contexts */
import { UserContext } from '../../../components/use-context/UserContext'

describe( '<LoginPage />', () => {

    const
        setUser = jest.fn(), 
        wrapper = shallow(                      //  Debe usarse 'mount' para acceder a los hijos del componente y poder ver la estructura del Componente HomePage (No se usa por que La version actual de Enzyme no es compatible con React 17)
            <UserContext.Provider value={{      //  Provee al Componente del contexto que necesita
                setUser
            }}>   
                <LoginPage />
            </UserContext.Provider>
        );

    test( 'debe desplegar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe ejecutar setUser con el argumento esperado', () => {

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente */
        // wrapper.find( 'button' ).prop( 'onClick' ) ();
        // expect( setUser ).toHaveBeenCalledWith({ 
        //     id: expect.any( Number ),
        //     name: "Eva", 
        //     email: "eva@correo.co" 
        // });

    } );


} );