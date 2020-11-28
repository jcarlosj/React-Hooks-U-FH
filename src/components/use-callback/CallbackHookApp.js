import React, { useState } from 'react';

/** Components */
import { IncreaseButton } from './IncreaseButton';

import './use-callback-app.css';

/** Functional Component */
export const CallbackHookApp = () => {

    const [ counter, setCounter ] = useState( 10 );

    const increment = () => {
        setCounter( counter + 1 );
    }

    return (
        <section className="container mt-5">
            <h1>Counter { counter }</h1>
            <p>Usando un Hook useCallback</p>
            <hr />
            <IncreaseButton increment={ increment } />
        </section>
    )
}
