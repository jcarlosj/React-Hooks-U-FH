import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Components */
import { AppRouter } from '../../../components/use-context/AppRouter';

/** Contexts */
import { UserContext } from '../../../components/use-context/UserContext'

describe( '<AppRouter />', () => {

    const 
        user = {
            id: 1,
            name: 'Janeth Eva Sofia',
            correo: 'eva©correo.co'
        },
        wrapper = shallow(                      //  Debe usarse 'mount' para acceder a los hijos del componente y poder ver la estructura del Componente HomePage (No se usa por que La version actual de Enzyme no es compatible con React 17) 
            <UserContext.Provider value={{          //  Provee al Componente del contexto que necesita
                user
            }}>   
                <AppRouter />
            </UserContext.Provider>
        );

    test( 'debe desplegar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    } );

} );