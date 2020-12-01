import React from 'react';

/** Components */
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

/** Functional Component */
export const MainApp = () => {

    /** Valores que deseamos pasar al Contexto (estará disponible para todo el árbol de nodos que abrace el context) */
    const user = {
        id: new Date().getTime(),
        name: 'Eva Sofia',
        email: 'eva.sofia@correo.co'
    }

    return (
        <UserContext.Provider value={ user }>   
            <AppRouter />
        </UserContext.Provider>
    )
}