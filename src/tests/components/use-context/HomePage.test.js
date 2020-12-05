import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';

/** Components */
import { HomePage } from '../../../components/use-context/HomePage';

/** Contexts */
import { UserContext } from '../../../components/use-context/UserContext'


describe( '<HomePage />', () => {

    const
        user = {
            name: 'Janeth Eva Sofia',
            correo: 'eva©correo.co'
        }, 
        wrapper = shallow(                      //  Debe usarse 'mount' para acceder a los hijos del componente y poder ver la estructura del Componente HomePage (No se usa por que La version actual de Enzyme no es compatible con React 17)
            <UserContext.Provider value={{      //  Provee al Componente del contexto que necesita
                user
            }}>   
                <HomePage />
            </UserContext.Provider>
        );

    test( 'debe desplegar correctamente', () => {

            expect( wrapper ).toMatchSnapshot();

    } );

} );