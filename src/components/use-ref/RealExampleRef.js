import React, { useState } from 'react';

/** Components */
import { MultipleCustomHooksApp } from '../MultipleCustomHooksApp';

import './multiple-custom-hook-app.css';

/** Functional Component */
export const RealExampleRef = () => {

    const [ show, setShow ] = useState( false );

    return (
        <section className="container mt-5">
            <h1>Real Example</h1>
            <p>Usando el Hook useRef</p>  
            <hr /> 

            {   show && <MultipleCustomHooksApp />  }

        <div className="form-group mt-3">
            <button
                className="btn btn-secondary"
                onClick={ () => {
                    setShow( ! show );
                } }
            >{ ! show ? 'Show' : 'Hide'  }</button>
        </div>

        </section>
    )
}
