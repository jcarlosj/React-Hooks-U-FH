import { useState, useEffect } from "react"

export const useFetch = ( url ) => {

    //  TO DO: Validar URL

    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {

        /** Establece el State para permitir la carga del Loading entre frases */
        setState({
            data: null,
            loading: true,
            error: null
        });
        
        fetch( url )
            .then( response => response.json() )
            .then( data => {

                //  TO DO: Evaluar que viene la data
                setTimeout( () => {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }, 4000 );

            });

    }, [ url ]);

    return state;
}
